const express = require("express");
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { authenticateJWT } = require("./middleware/auth");
const ExpressError = require("./expressError");

app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(authenticateJWT);

const gameRoutes = require("./routes/knuckleSandwiches");
const authRoutes = require("./routes/auth");
app.use("/knuckleSandwiches", gameRoutes);
app.use("/auth", authRoutes);

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);

    return next(err);
});

app.use(function (err, req, res, next) {
    let status = err.status || 500;

    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    });
});

module.exports = app;