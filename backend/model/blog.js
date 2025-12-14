const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: { type: String, required: [true, 'Title is required'] },
    content: { type: String, required: [true, 'Content is required'] },
    featuredImage: { type: String, required: [true, 'Featured image is required'] },
},{ timestamps: true }, { collection: 'blogs' });

module.exports = mongoose.model('Blog', blogSchema);