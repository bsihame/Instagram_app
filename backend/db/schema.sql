DROP DATABASE IF EXISTS instagram2_database;
CREATE DATABASE instagram2_database;
\c instagram2_database

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS tags;

CREATE TABLE users
(
  id VARCHAR UNIQUE,
  full_name TEXT,
  email VARCHAR UNIQUE,
  username TEXT UNIQUE,
  bio TEXT ,
  profile_pic VARCHAR
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  poster_id VARCHAR REFERENCES users (id) ON DELETE CASCADE,
  picture TEXT,
  content VARCHAR,
  created_at TIMESTAMP
  WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

  CREATE TABLE tags
  (
    id SERIAL PRIMARY KEY,
    poster_id VARCHAR REFERENCES Users(id),
    post_id INT REFERENCES Posts(id),
    tag TEXT
  );

  CREATE TABLE likes
  (
    id SERIAL PRIMARY KEY,
    liker_id VARCHAR REFERENCES Users(id),
    post_id INT REFERENCES Posts(id),
    CONSTRAINT UC_like UNIQUE (liker_id, post_id)
  );

  -- Relationship table
  CREATE TABLE friends
  (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id),
    friend_id VARCHAR REFERENCES users(id)
  );

  INSERT INTO users
    (id, full_name, email, username, bio, profile_pic)
  VALUES
    (1, 'Sihame Bazi', 'sihamebazi@gmail.com', 'bsihame', 'Full stack develloper', null),
    (2, 'Pamela Benis', 'pam@gmail.com', 'crazy', 'Artist', null),
    (3, 'David Kimble', 'kimbel@yahoo.com', 'gravity', 'Teacher', null);

  INSERT INTO posts
    (poster_id, content, picture, created_at)
  VALUES
    (2, 'Hi', '../../frontend/src/images/covid.png', 'May 29, 2020 2:39:58 AM'),
    (1, 'Thank you 4 sharing your  experiance', '../../frontend/src/images/bear.jpeg', 'Dec 2, 2020 2:39:58 AM');

  INSERT INTO friends
    (user_id, friend_id)
  VALUES
    (1, 2),
    (1, 3),
    (2, 1);

  INSERT INTO tags
    (poster_id, post_id, tag)
  VALUES
    (1, 1, 'Tag1'),
    (2, 2, 'Tag2'),
    (1, 2, 'Tag3');

  INSERT INTO likes
    (liker_id, post_id)
  VALUES
    (1, 1),
    (1, 2),
    (2, 2);
