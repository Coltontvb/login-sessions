//jshint esversion:6

//ENV VARIABLES
require(`dotenv`).config();
//=========== Required assets for program to run ============//
const express = require(`express`);
const bodyParser = require(`body-parser`);
const ejs = require(`ejs`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const bcrypt = require(`bcrypt`);
const saltRounds = 10;

//========== Express Server ===========//
const app = express();
const port = process.env.PORT || 3000;

//==== Settings for express statics, view engine, form parser & morgan
app.use(express.static(__dirname + `/public`));
app.set(`view engine`, `ejs`);
app.use(bodyParser.urlencoded({
    extended: true}));
app.use(logger(`dev`));

//========== MongoDB Server ===========//
mongoose.connect(`mongodb://localhost:27017/userDB`, {useUnifiedTopology: true, useNewUrlParser: true});

// ======== ROUTING ======== //
//Static pages Controller
const staticPage = require(`./controllers/StaticPagesController`);
const userRouter = require(`./routes/user`);

//Static
app.get(`/`, staticPage.home);
app.get(`/about`, staticPage.about);
app.get(`/contact`, staticPage.contact);
//Users
app.use(`/users`, userRouter);



// Listen for server init (testing = nodemon app.js PORT = 3000)
app.listen(port, () => {
    console.log(`Server opened on ${port}`);
});

