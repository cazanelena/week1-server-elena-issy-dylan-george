## Paranormal Activity Newsboard Readme

The Paranormal Activity Newsboard is a web application that allows users to submit and view paranormal experiences. It is built using Node.js and the Express framework.

The core functions of the application are:

-   **Submit a paranormal experience:** Users can submit their paranormal experiences by filling out a form on the website. The form includes fields for the user's username, message, and date of the experience.
-   **View paranormal experiences:** Users can view all recent paranormal experiences by visiting the root of the website. The website displays a list of all recent submissions, along with the username and date of each experience.
-   **Delete a paranormal experience:** Users can delete their own paranormal experiences by clicking on the "Delete Post" link next to the post.

To run the application, clone the repository and install the dependencies:

```
git clone https://github.com/YOUR_USERNAME/paranormal-activity-newsboard.git
cd paranormal-activity-newsboard
npm install
```

Then, start the server:

```
node server
```

The application will be running on port 3000 by default. 

After cloning the repo you can run the "npm run dev" command. This way you can visit it in your browser at http://localhost:3000.

To submit a paranormal experience, click on the "Submit Post" link. You will be taken to a form where you can enter your username and message. Click the "Submit" button to submit your post.

To view paranormal experiences, simply visit the root of the website (http://localhost:3000). You will see a list of all recent submissions. You can also click on the "Delete Post" link next to a post to delete it.

### Usage

To submit a paranormal experience:

1. Visit https://reporting-paranormal-activity.fly.dev/ and click on the "Submit Post" link.
1. Enter your username and message.
1. Click the "Submit" button.

To view paranormal experiences:

1. Visit http://localhost:3000.
1. Scroll down to see a list of all recent submissions.

### Features

-   Submit and view paranormal experiences
-   Delete your own posts
-   Simple and easy-to-use interface

### Contribute

If you would like to contribute to the development of this application, please feel free to fork the repository and submit a pull request.

### src directory 

This directory is the main source of our codebase. We separate this in 3 different files: index.js, server.js and templates.js. 
- The index.js is where we defined the Port that the server is listening to.   
- The server.js is where our server is created and we defined all the routes that the user can use, or be redirected to. 
- We used the templates.js to store the functions that will render the html.

