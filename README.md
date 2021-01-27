# Instagram_app

![Instagram_app](.doc/../docs/login.png)

**Instagram_app** is a clone of a Social Media Web App Instagram. It is a Full-Stack Web App that allows user to connect with their friends and their families. Users can publish their photos, comments and likes the posts.

# Live Site @ [Instagram_app](https://sihame-instagram-clone.netlify.app)

## Table of Contents

- [Features](feature)
- [Installation Instructions](#installation-instructions)
- [Technologies](#technologies)
- [Learn More](#learn-more)

## Features

Users can:

- [Create an account](./docs/signUp.png) and [login](./docs/login.png) with Firebase
- View user [profile](./docs/userProfile.png) by other users
- View all posts by other users
- Like and comment on other users posts
- Search for other users
- Update their own profile

## Installation Instructions

1. Fork and clone this repository
2. In the root folder run `npm start` (This will install and run the backend)
3. From the root folder still run `psql -f backend/db/schema.sql` (This will create the local database)
   - You might want to check to make sure the database was correctly created.
4. After the database is installed you can `cd frontend` and run `npm i` or `npm install` to install all necessary packages
5. Start coding! (to check the live test run `npm start` in the frontend folder

## Technologies

Instagram_app was created using

- React
- React Hooks
- Express.js
- Firebase
- SQL
- Material UI
- Bootstrap
- Netlify
- Heroku

## Learn More

To learn more about how to [Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn about [React Hooks](https://reactjs.org/docs/hooks-intro.html).

To learn about [Express.js](https://www.guru99.com/node-js-express.html).

To learn about [Firebase](https://firebase.google.com/).

To learn about [SQL](https://www.postgresql.org/docs/current/index.html).

To learn about [Material UI](https://material-ui.com/).

To learn about [Bootstrap](https://react-bootstrap.github.io/).

To learn about [Netlify](https://www.netlify.com/).

To learn about [Heroku](https://www.heroku.com).
