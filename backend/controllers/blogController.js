const blog = require("../model/blog");

const getAllPost = async (req, res) => {
    try {
        const posts = await blog.find({});
        if (posts.length === 0) {
            throw new Error('No posts found');
        } else {
            res.status(200).json(posts);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllPost
};