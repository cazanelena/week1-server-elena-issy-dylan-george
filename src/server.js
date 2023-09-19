const express = require("express");
const { form, renderingPosts, defaultPosts } = require("./templates");
const server = express();

server.use(express.static("public"));

//Push posts to an array [{Username: Jon, Message: "Hi there", Date: "2nd, Sept, 2023"}]
const posts = [];

server.get("/", (req, res) => {
    if (posts.length == 0) {
        res.send(defaultPosts());
    } else {
        res.send(renderingPosts(posts));
    }
});

server.get("/submit-post", (req, res) => {
    res.send(form());
});

server.post("/submit-post", express.urlencoded({ extended: false }), (req, res) => {
    const username = req.body.username || "Anonymous";
    const message = req.body.message;

    const errors = {};

    if (!message) {
        errors.message = "Please enter a message";
    }

    // if there are errors:
    if (Object.keys(errors).length) {
        const body = form();
    } else {
        const created = Date.now();
        posts.push({ username, message, created });
        res.redirect("/");
    }
});

server.get("/delete-post/:index", (req, res) => {
    const index = req.params.index;

    if (index >= 0 && index < posts.length) {
        // Remove the post at the specified index from the `posts` array
        posts.splice(index, 1);
    }

    // Redirect back to the main page after deleting the post
    res.redirect("/");
});

module.exports = server;
