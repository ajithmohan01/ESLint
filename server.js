const express = require('express');
const postController = require('./controllers/postController');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to create a post
app.post('/posts', postController.createPost);

// Route to get all posts
app.get('/posts', postController.getAllPosts);

// Route to get a specific post
app.get('/posts/:id', postController.getPostById);

// Route to update a post
app.put('/posts/:id', postController.updatePost);

// Route to delete a post
app.delete('/posts/:id', postController.deletePost);

// Start the server
const PORT = 3000;
