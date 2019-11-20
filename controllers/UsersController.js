//jshint esversion:8

//Models
const User = require(`../models/user`);
//Encryption
const bcrypt = require(`bcrypt`);
const saltRounds = 10;

//export to app.js
module.exports = {
    
    get_new_user: (req, res) => {
        res.render(`user/register`);
    },
    
    post_new_user: async (req, res, next) => {
        try {
            console.log(`Validated User Registry info!`);
            bcrypt.hash(req.body.password, saltRounds, async (hash) => {
                const newUser = new User({
                    name: req.body.username,
                    email: req.body.user_email,
                    password: hash,
                    createdAt: Date.now()
                });
                await newUser.save();
                console.log(`New user created and saved!`);
                res.render(`user/secret`);
            });            
        } 
        catch(err){
            next(err);
            res.redirect(`/`);
        }
    },

    get_user_login: (req, res) => {
        console.log(`GET login`);
        res.render(`user/login`);
    },

    post_user_login: async (req, res) => {
        try {
            console.log(`POST Login`);
            
            const user_login = req.body.user_email;
            const password = req.body.password;

            const foundUser = await User.findOne({email: user_login});
            if (foundUser){
                if (foundUser.password === password){
                    res.render(`user/secret`);
                }
                else {
                    console.log(`ERROR: incorrect username and/or password`);
                    res.redirect(`login`);
                }
            }
        } catch(err){
            next(err);
        }
    }
};