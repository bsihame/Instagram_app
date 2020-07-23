const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// const path = require('path');
const PORT = process.env.PORT;
const { checkFirebaseToken } = require("./middleware/auth");


const usersRouter = require("./routes/Users/users");
const postsRouter = require("./routes/Posts/post");


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/images", express.static('public'))

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);

app.use((err, req, res, next) => {
    console.log(err);
    if (err.status) {
        res.status(err.status).json(err);
    } else {
        res.status(500).json(err);
    }
});
app.get("*", (req, res, next) => {
    res.status(404).json({
        status: 404,
        error: "No route found."
    });
});

app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
})