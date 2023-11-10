const express = require("express");
const app = express();
const ExpressError = require("./expressError");

app.set('view engine', 'ejs');
app.use(express.json());

const routes = require("./routes/knuckleSandwiches");
app.use("/knuckleSandwiches", routes);

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