const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post.controller');

router.post('/posts', PostController.create)
router.get('/posts', PostController.findAll)
router.get('/posts/:id', PostController.findOne)
router.delete('/posts/:id', PostController.delete)
router.put('/posts/:id', PostController.update)

module.exports = router;