const db = require("../db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const ExpressError = require("../expressError");
const jwt = require('jsonwebtoken');

class User {
    static async register(newUsername, newEmail, newPassword) {
        let hashedPassword = await bcrypt.hash(newPassword, BCRYPT_WORK_FACTOR);
        const results = await db.query(`
                INSERT INTO users (username, password, email)
                VALUES ($1, $2, $3)
                RETURNING username, password, email`,
            [newUsername, hashedPassword, newEmail]);
        return results.rows[0]
    }

    static async authenticate(username, password) {
        const results = await db.query(`
                SELECT username, password 
                FROM users
                WHERE username = $1
                `, [username]);
        let user = results.rows[0];
        console.log('line 39', user)
        if (user) {
            // console.log('line 41', password, user.password)
            // console.log('line 42', bcrypt.hash(password, BCRYPT_WORK_FACTOR), user.password)
            if (await bcrypt.compare(password, user.password)) {

                const token = jwt.sign({ username }, SECRET_KEY);
                return token
            }
        }
        return null
    }

    static async getUserInfo(username) {
        const results = await db.query(`
            SELECT username, email, wins, losses, highestScore, playerIconNumber
            FROM users
            WHERE username = $1
        `, [username]);

        return results.rows[0];
    }
}

module.exports = User;