//jshint esversion:6
const mongoose = require(`mongoose`);

//Define the model
const userSchema = new mongoose.Schema({   
    name: String,
    email: String,
    password: String,
    createdAt: Date,
    /*posts: [{
        //Get the objectid of Post
        type: mongoose.Types.ObjectId,
        ref: `Post`
    }]*/
});

//Create the model
const User = mongoose.model(`User`, userSchema);

//Export User Model
module.exports = User;

