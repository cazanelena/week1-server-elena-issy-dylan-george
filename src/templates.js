function home(posts) {
  const title = "All posts";

  const content = `
      <h2>New post</h2>
      <form method="POST">
        <p>
          <label for="username">Username</label>
          <input id="username" name="username">
        </p>
        <p>
          <label for="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </p>
        <button>Send</button>
      </form>
      <h2>All posts</h2>
      <ul>
        ${posts.map(postItem).join("")}
      </ul>
    `;
  return layout(title, content);
}
function postItem(post) {
    const date = new Date(post.created);
    const prettyDate = date.toLocaleString("en-GB");
    return `
      <li>
        <p>${post.message}</p>
        <p>—${post.nickname} | ${prettyDate}</p>
      </li>
    `;
  }
  
function layout(title, content) {
    return /*html*/ `
      <!doctype html>
      <html>
        <head>
          <title>${title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
          ${content}
        </body>
      </html>
    `;
  }
  
module.exports = { home }
