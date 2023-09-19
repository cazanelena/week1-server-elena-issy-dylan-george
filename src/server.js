const express = require("express");
const server = express();

server.use(express.static('public'));

server.get("/", (req, res) => {
    res.send(`
        <h1>Testing!</h1>
    `)
});

module.exports = server;