//jshint esversion:8

const express = require(`express`);
const router = express.Router();

const UsersController = require(`../controllers/UsersController`);

router.get(`/register`, UsersController.get_new_user);
router.post(`/register`, UsersController.post_new_user);
router.get(`/login`, UsersController.get_user_login);
router.post(`/login`, UsersController.post_user_login);


module.exports = router;