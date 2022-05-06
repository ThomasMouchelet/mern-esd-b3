const Post = require('../models/post.model');

const PostController = {
    create: async (req, res) => {
        try {
            const post = await Post.create(req.body);
            post.save();
        
            res.send(post);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    findAll: async (req, res) => {
        try { 
            const posts = await Post.find();
            res.send(posts);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    findOne: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            res.send(post);
        }catch (error) {
            res.status(500).send(error);
        }
    },
    delete: async (req, res) => {
        try {
            const post = await Post.findByIdAndRemove(req.params.id);
            res.send(post);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    update: async (req, res) => {
        try {
            const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.send(post);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = PostController;