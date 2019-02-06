const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require('../../models/Post')

// @route 	GET /api/users/posts
// @desc 		Tests post route
// @access 	Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route 	POST /api/posts/
// @desc 		Create a post
// @access 	Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) {
  const newPost = new Post({
    text: req.body.text,
    name: req.body.name,
    avatar: req.body.avatar,
    user: req.user.id
  })

  newPost.save().then(post => res.json(post))
})

module.exports = router;
