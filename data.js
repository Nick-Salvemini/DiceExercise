const bcrypt = require('bcrypt');
const { BCRYPT_WORK_FACTOR } = require("./config");

// Your user data with plain passwords

const users = [
    { username: 'user1', password: 'password1', email: 'fake1@gmail.com' },
    { username: 'user2', password: 'password2', email: 'fake2@gmail.com' },
    { username: 'user3', password: 'password3', email: 'fake3@gmail.com' },
    { username: 'user4', password: 'password4', email: 'fake4@gmail.com' }
];

// Hash passwords before inserting into the database

const hashPasswords = async () => {
    for (const user of users) {
        const hashedPassword = await bcrypt.hash(user.password, BCRYPT_WORK_FACTOR);
        user.password = hashedPassword;
    }

    console.log(users);
};

// Call the function
hashPasswords();