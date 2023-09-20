const test = require("node:test");
const assert = require("node:assert");
const { request } = require("./helpers");
const { posts } = require("../src/server");

test(`"/" GET route returns HTML and status code of 200`, async () => {
    const { status, body } = await request("/", {
        method: "GET",
    });
    assert.equal(status, 200);
    assert.match(
        body,
        /^\n *\<!DOCTYPE html>/,
        `Expected server to serve HTML, but received: ${body}`
    );
});
