const pg = require("pg");

const db = new pg.Client("postgresql:///usersdb");

db.connect();

module.exports = db;