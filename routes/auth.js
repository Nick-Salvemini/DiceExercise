const jwt = require('jsonwebtoken');
const Router = require("express").Router;
const router = new Router();

const User = require('../models/user');
const { SECRET_KEY } = require('../config');
const ExpressError = require('../expressError');

router.post('/register', async function (req, res, next) {
    try {
        let { newUsername, newEmail, newPassword, confirmPassword } = req.body

        if (!newUsername || !newEmail || !newPassword) {
            throw new ExpressError('Username, Email, and Password Required', 400);
        } else if (!confirmPassword) {
            throw new ExpressError('Must confirm password', 400);
        } else if (newPassword !== confirmPassword) {
            throw new ExpressError('Passwords Must Match', 400);
        }

        let newUser = await User.register(newUsername, newEmail, newPassword);
        console.log('auth.js route line 22', newUser)
        let token = jwt.sign({ username: newUsername }, SECRET_KEY);
        res.cookie('token', token, { httpOnly: true });
        return res.redirect(`/knuckleSandwiches/${newUser.username}`)
    }
    catch (e) {
        if (e.code === '23505') {
            return next(new ExpressError("Username or Email taken. Please try again.", 400));
        }
        return next(e)
    }
});

router.post('/login', async function (req, res, next) {
    try {
        let { username, password } = req.body;
        if (!username || !password) {
            throw new ExpressError("Username and password required", 400);
        }

        let token = await User.authenticate(username, password)

        console.log('line 53', token)

        if (token) {
            res.cookie('token', token, { httpOnly: true })
            return res.redirect(`/knuckleSandwiches/${username}`)
        } else {
            throw new ExpressError('Invalid username/password', 400);
        }
    }
    catch (err) {
        return next(err);
    }
});




module.exports = router;