const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

const usersRouter = require("./routes/Users/users");
const postsRouter = require("./routes/Posts/userPost");


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);

// app.use((err, req, res, next) => {
//     console.log(err);
//     if(err.status) {
//         res.status(err.status).json(err);
//     } else {
//         res.status(500).json(err);
//     }
// })

app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
})