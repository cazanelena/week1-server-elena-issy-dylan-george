function form(errors = {}, values = {}) {
    const title = "Report a Paranormal Event";

    const content = `
      <h2>New post</h2>
      <form method="POST">
        <p>
          <label for="username">Username</label>
          <input
            id="username"
            name="username"
            value="${values.username ? sanitize(values.username) : ""}"
          >
        </p>
        <p>
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message">${
                values.message ? sanitize(values.message) : ""
            }</textarea>
          ${validation(errors.message)}
        </p>
        <button class="bigger-button">Send</button>
      </form>
    `;
    return layout(title, content);
}

function sanitize(unsafe) {
    return unsafe.replace(/</g, "&lt;");
}

function validation(message) {
    if (message) {
        return `<span style="color: red">${message}</span>`;
    } else {
        return "";
    }
}

function defaultPosts() {
    const title = "No Recent Paranormal Events";

    const content = `
    <h2>There have been no sightings yet...</h2>
    <a href="/submit-post"><button class="bigger-button">Report Activity</button></a>
    `;

    return layout(title, content);
}

function renderingPosts(posts) {
    const title = "Recent Paranormal Activity";

    const content = `
    <h2>All posts</h2>
    <ul>
      ${posts.map((post, index) => postItem(post, index)).join("")}
    </ul>
    <a href="/submit-post"><button id="addPostButton">Add Post</button></a>
    `;
    return layout(title, content);
}

function postItem(post, index) {
    const date = new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    const date2 = new Date();

    // Create options for formatting the time
    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: false, // Use 24-hour format
    };

    const formattedTime = date2.toLocaleTimeString("en-GB", timeOptions);

    return `
      <li class="message-container">
        <p class="message">${sanitize(post.message)}</p>
        <p class="user-info">By ${sanitize(post.username)} | ${date} ${formattedTime}</p>

        <a href="/delete-post/${index}" class="delete-link">
          <button class="deletePostButton">Delete</button>
        </a>
      </li>
    `;
}

function layout(title, content) {
    return /*html*/ `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <!-- Favicons and Touch Icons -->
          <link rel="icon" href="/images/favicon-32.png">
          <link rel="icon" href="/images/favicon-128.png">
          <link rel="icon" href="/images/favicon.svg" type="image/svg+xml">
		      <!-- Stylesheets and Fonts -->
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&family=Spectral:wght@300&display=swap" rel="stylesheet">


          <link rel="stylesheet" href="css/style.css">
        </head>
        <body>

          <div class="main-container">
            <h1 class="centered-text">Paranormal Activity Newsboard</h1>
            <p class="intro-text centered-text">
              Welcome to Paranormal Activity Newsboard, for all lovers of paranormal activities, strange sightings, and miscellaenous wonders.
              Share your experiences or lurk in the dark, the choice is yours.
            </p>
            <div class="child-container">
             ${content}
            </div>
          </div>
        </body>

      </html>
    `;
}

module.exports = { form, renderingPosts, defaultPosts };
