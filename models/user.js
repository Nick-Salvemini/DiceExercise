const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");

class User {
    static async register({ username, password, email }) {
        let hashedPassword = await bcrypt.hash(password);
        const results = await db.query(`
        INSERT INTO users (username, password, email)
        VALUES ($1, $2, $3)
        RETURNING username, password, email`,
            [username, hashedPassword, email]);
        return results.rows[0]
    }

    static async authenticate(username, password) {
        const results = await db.query(`
        SELECT password 
        FROM users
        WHERE username = $1
        `, [username]);
        let user = results.rows[0];
        return user && await bcrypt.compare(password, user.password)
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