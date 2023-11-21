const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

function authenticateJWT(req, res, next) {
    try {
        const tokenFromCookies = req.cookies.token;
        const payload = jwt.verify(tokenFromCookies, SECRET_KEY);
        req.user = payload;
        return next();
    } catch (err) {
        console.log(err)
        return next();
    }
}

function ensureLoggedIn(req, res, next) {
    if (!req.user) {
        return next({ status: 401, message: "Unauthorized" });
    } else {
        return next();
    }
}

function ensureCorrectUser(req, res, next) {
    try {
        if (req.user.username === req.params.username) {
            return next();
        } else {
            return next({ status: 403, message: "Unauthorized" });
        }
    } catch (err) {
        return next({ status: 403, message: "Unauthorized" });
    }
}

module.exports = {
    authenticateJWT,
    ensureLoggedIn,
    ensureCorrectUser
};