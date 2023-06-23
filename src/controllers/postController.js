const postService = require('../services/postService');

async function createPost(req, res) {
  try {
    const post = await postService.createPost(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllPosts(req, res) {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getPostById(req, res) {
  try {
    const { id } = req.params;
    const post = await postService.getPostById(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updatePost(req, res) {
  try {
    const { id } = req.params;
    const post = await postService.updatePost(id, req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletePost(req, res) {
  try {
    const { id } = req.params;
    await postService.deletePost(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
