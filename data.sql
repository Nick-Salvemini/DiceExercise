-- CREATE DATABASE IF NOT EXISTS knuckle_sandwiches_db;

\c knuckle_sandwiches_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username text NOT NULL UNIQUE,
    password text NOT NULL,
    email text NOT NULL UNIQUE,
    wins INT DEFAULT 0,
    losses INT DEFAULT 0,
    highestScore INT DEFAULT 0,
    playerIconNumber INT DEFAULT 1
);

INSERT INTO 
  users (username, password, email) 
VALUES 
  ('firstUser', 'password123', 'fakeEmail@gmail.com');

INSERT INTO
  users (username, password, email)
VALUES
    ('secondUser', 'password123', 'leviosa@gmail.com');

INSERT INTO
  users (username, password, email)
VALUES
    ('thirdUser', 'password123', 'kumquat@gmail.com');

INSERT INTO
  users (username, password, email)
VALUES
    ('forthUser', 'password123', 'rolf@gmail.com');