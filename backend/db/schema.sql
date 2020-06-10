DROP DATABASE IF EXISTS instagram2_database;
 CREATE DATABASE instagram2_database;
\c instagram2_database

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS tags;

CREATE TABLE users
(
  --  id VARCHAR PRIMARY KEY,
  id SERIAL PRIMARY KEY,
  full_name TEXT,
  email VARCHAR UNIQUE,
  username TEXT UNIQUE,
  bio TEXT ,
  profile_pic VARCHAR
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  poster_id INT REFERENCES users (id) ON DELETE CASCADE,
  picture TEXT,
  content VARCHAR,
  created_at TIMESTAMP
  WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

  CREATE TABLE tags
  (
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES Users(id),
    post_id  INT REFERENCES Posts(id),
    tag TEXT
  );

   CREATE TABLE likes
   (
    id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES Users(id),
    post_id  INT REFERENCES Posts(id),
    CONSTRAINT UC_like UNIQUE (liker_id, post_id)
   );

  
INSERT INTO users
    (full_name, email, username, bio, profile_pic)
  VALUES
    ('Sihame Bazi', 'sihamebazi@gmail.com', 'bsihame', 'Full stack develloper', null),
    ('Pamela Benis', 'pam@gmail.com', 'crazy', 'Artist',null),
    ('David Kimble', 'kimbel@yahoo.com', 'gravity', 'Teacher', null);

  INSERT INTO posts
    (poster_id, picture, content, created_at)
  VALUES
    (2, 'Hi', '../../frontend/src/images/covid.png', 'May 29, 2020 2:39:58 AM'),
    (1, 'Thank you 4 sharing your  experiance', '../../frontend/src/images/bear.jpeg', 'Dec 2, 2020 2:39:58 AM');

  INSERT INTO tags
    (poster_id, post_id, tag)
  VALUES
  (1, 1, 'Tag1'),
  (2, 2, 'Tag2'),
  (1, 2, 'Tag3');

  INSERT INTO likes
    (liker_id, post_id)
  VALUES
  (1,1),
  (1,2),
  (2,2);
