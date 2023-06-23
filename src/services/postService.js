const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createPost(data) {
  const post = await prisma.post.create({ data });
  return post;
}

async function getAllPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

async function getPostById(id) {
  const post = await prisma.post.findUnique({ where: { id: parseInt(id, 10) } });
  return post;
}

async function updatePost(id, data) {
  const post = await prisma.post.update({
    where: { id: parseInt(id, 10) },
    data,
  });
  return post;
}

async function deletePost(id) {
  await prisma.post.delete({ where: { id: parseInt(id, 10) } });
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
