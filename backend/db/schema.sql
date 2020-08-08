DROP DATABASE IF EXISTS instagram2_database;
CREATE DATABASE instagram2_database;
\c instagram2_database

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS tags;

CREATE TABLE users
(
  id VARCHAR UNIQUE,
  full_name VARCHAR,
  email VARCHAR UNIQUE,
  username VARCHAR UNIQUE,
  bio VARCHAR,
  profile_pic VARCHAR
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  poster_id VARCHAR REFERENCES users (id) ON DELETE CASCADE,
  picture VARCHAR,
  content VARCHAR,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES Posts(id),
    poster_id VARCHAR REFERENCES users (id) ON DELETE CASCADE,
    content TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
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
    (1, 'Sihame Bazi', 'sihamebazi@gmail.com', 'bsihame', 'Full stack develloper', 'https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png'),
    (2, 'Pamela Benis', 'pam@gmail.com', 'crazy', 'Artist', 'https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png'),
    (3, 'David Kimble', 'kimbel@yahoo.com', 'gravity', 'Teacher', 'https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png');

  INSERT INTO posts
    (poster_id, content, picture, created_at)
  VALUES
    (2, 'Hi', 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'May 29, 2020 2:39:58 AM'),
    (1, 'Thank you 4 sharing your  experiance', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE7D0W-VZtz5s-z_kpunYe8Z7iARwaqgLwJQ&usqp=CAU', 'Dec 2, 2020 2:39:58 AM');

  INSERT INTO comments
    (post_id, poster_id, content, created_at)
  VALUES
    (1, 2, 'Nice', 'May 29, 2020 2:39:58 AM' ),
    (2, 1, 'Beautifull', 'Dec 2, 2020 2:39:58 AM' );

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
