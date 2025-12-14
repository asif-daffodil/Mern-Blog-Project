const express = require('express');
const { getAllPost } = require('../controllers/blogController');
const router = express.Router();

router.get('/posts', getAllPost);

module.exports = router;