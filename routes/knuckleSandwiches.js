const Router = require('express').Router;
const User = require('../models/user');
const { ensureLoggedIn, authenticateJWT, ensureCorrectUser } = require('../middleware/auth');

const router = new Router();

router.get('/', async function (req, res, next) {
    res.render('home', { username });
});

router.get('/:username', ensureLoggedIn, ensureCorrectUser, async function (req, res, next) {
    try {
        const username = req.params.username;
        const userInfo = await User.getUserInfo(username);
        if (!userInfo) {
            return res.status(404).send('User not found');
        }
        res.render('userPage', { userInfo });
    } catch (error) {
        next(error);
    }
});

router.get('/:username/game', ensureLoggedIn, ensureCorrectUser, async function (req, res, next) {
    const username = req.params.username;
    res.render('game', { username });
});

module.exports = router;