require("dotenv").config();

const DB_URI = (process.env.NODE_ENV === "test")
    ? "postgresql:///knuckle_sandwiches_db_test"
    : "postgresql:///knuckle_sandwiches_db";

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;


module.exports = {
    DB_URI,
    SECRET_KEY,
    BCRYPT_WORK_FACTOR,
};