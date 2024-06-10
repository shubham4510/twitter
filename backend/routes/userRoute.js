const express = require('express')
const {Register,Login, Logout} = require('../controllers/userController.js')
const {isAuthenticated} = require('../controllers/auth.js')

const router = express.Router();

router.post("/register",Register)
router.post("/login",Login)
router.get("/logout",Logout)
router.post("/createtweet",isAuthenticated)

module.exports = router