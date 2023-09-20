const test = require("node:test");
const assert = require("node:assert");
const { request } = require("./helpers.js");

test("POST without message re-renders page with error", async () => {
    const { status, body } = await request("/submit-post", {
        method: "POST",
        body: "nickname=oli&message=",
        headers: { "content-type": "application/x-www-form-urlencoded" },
    });
    assert.equal(status, 400);
    assert.match(body, /<form/i, "Page should include the form");
    assert.match(
        body,
        /please enter a message/i,
        `Expected HTML to include "please enter a message", but received:\n${body}`
    );
});

test("STRETCH GOAL: POST without message preserves nickname", async () => {
    const { status, body } = await request("/submit-post", {
        method: "POST",
        body: "username=AlienAbductee2301&message=",
        headers: { "content-type": "application/x-www-form-urlencoded" },
    });
    assert.equal(status, 400);
    assert.match(
        body,
        /value="AlienAbductee2301"/i,
        `Username input should have value attribute set to AlienAbductee2301", but received:\n${body}`
    );
});
