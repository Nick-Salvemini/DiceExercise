const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

function authenticateJWT(req, res, next) {
    try {
        console.log('line 6', req.cookies)
        const tokenFromBody = req.cookies.token;

        const payload = jwt.verify(tokenFromBody, SECRET_KEY);
        console.log('line 9', payload)
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
        console.log('line 29', req.user.username, req.params.username)
        console.log('line 30', req.user)
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