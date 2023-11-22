
const Router = require('express').Router;
const router = new Router();

const User = require('../models/user');
const { ensureLoggedIn, ensureCorrectUser } = require('../middleware/auth');



router.get('/', async function (req, res, next) {
    res.render('home');
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
    try {
        const username = req.params.username;
        const userInfo = await User.getUserInfo(username);
         return res.render('game', { userInfo });
    } catch (error) {
        console.error('Error in game route:', error);
        next(error);
    }
});

module.exports = router;