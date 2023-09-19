const express = require("express");
const { home } = require("./templates")
const server = express();

server.use(express.static('public'));

//Push messages to an array [{Username: Jon, Message: "Hi there", Date: "2nd, Sept, 2023"}]
const messages = [];

server.get("/", (req, res) => {
    res.send(home(messages))
});

module.exports = server;