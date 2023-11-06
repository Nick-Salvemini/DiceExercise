const pg = require("pg");

const db = new pg.Client("postgresql:///knuckle_sandwiches_db");

db.connect();

module.exports = db;