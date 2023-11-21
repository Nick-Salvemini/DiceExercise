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

-- INSERT INTO 
--   users (username, password, email) 
-- VALUES 
--   ('firstUser', 'password123', 'fakeEmail@gmail.com');

-- INSERT INTO
--   users (username, password, email)
-- VALUES
--     ('secondUser', 'password123', 'leviosa@gmail.com');

-- INSERT INTO
--   users (username, password, email)
-- VALUES
--     ('thirdUser', 'password123', 'kumquat@gmail.com');

-- INSERT INTO
--   users (username, password, email)
-- VALUES
--     ('forthUser', 'password123', 'rolf@gmail.com');

INSERT INTO
  users (username, password, email)
VALUES
  ('user1','$2b$12$g0wuEdfp5jY0bauCzow36.Zut4bIqG9HAdIz3pQzmSjwLPvdRYaf.','fake1@gmail.com'),
  ('user2','$2b$12$Y76VD4IZEZKOcq2057lmre3ml5IHu5/.tMOVIy84TRqRuVREvvm2q','fake2@gmail.com'),
  ('user3','$2b$12$AqOPnRwN7Tq5KJKfBfuK0eokXSYfXcgiz/6MGw/j7tcdWZrXnheuy','fake3@gmail.com'),
  ('user4','$2b$12$cRrrB25qYTj/8yDlf6fFSu7W5XyJ4BngWJRHXNXQPwPIgk3O1lvIu','fake4@gmail.com')