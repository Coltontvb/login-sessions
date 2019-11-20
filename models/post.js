//jshint esversion:6

const mongoose = require(`mongoose`);

//Define the model
const postSchema = new mongoose.Schema ({
    title: String,
    subTitle: String,
    createdAt: Date,
    articleBody: String,
    /*user: {
        type: mongoose.Types.ObjectId,
        ref: `Post`
    }*/
});

//Create the model
const Post = mongoose.model(`Post`, postSchema);
module.exports = Post;
