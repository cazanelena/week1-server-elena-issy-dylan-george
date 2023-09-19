const express = require("express");
const { home } = require("./templates");
const server = express();

server.use(express.static("public"));

//Push posts to an array [{Username: Jon, Message: "Hi there", Date: "2nd, Sept, 2023"}]
const posts = [];

server.get("/", (req, res) => {
    res.send(home(posts));
});

server.post("/", express.urlencoded({ extended: false }), (req, res) => {
    const username = req.body.username || "Anonymous";
    const message = req.body.message;

    const errors = {};

    if (!message) {
        errors.message = "Please enter a message";
    }

    // if there are errors:
    if (Object.keys(errors).length) {
        const body = home(posts);
    } else {
        const created = Date.now();
        posts.push({ username, message, created });
        res.redirect("/");
    }
});

module.exports = server;
