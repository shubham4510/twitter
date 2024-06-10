const express = require('express');
const { isAuthenticated } = require('../controllers/auth');
const { createTweet, deleteTweet, likeOrDislike } = require('../controllers/tweetController');


const router = express.Router()


router.post("/create",isAuthenticated,createTweet)
router.delete("/delete/:id",isAuthenticated,deleteTweet)
router.put("/like/:id",isAuthenticated,likeOrDislike)
router.put("/dislike/:id",isAuthenticated,likeOrDislike)


module.exports = router;