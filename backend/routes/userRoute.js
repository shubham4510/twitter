const express = require('express')
const {Register,Login, Logout, bookmark, getMyProfile, getOtherUsers} = require('../controllers/userController.js')
const {isAuthenticated} = require('../controllers/auth.js')

const router = express.Router();

router.post("/register",Register)
router.post("/login",Login)
router.get("/logout",Logout)
router.put("/bookmark/:id",isAuthenticated,bookmark)
router.get("/profile/:id",isAuthenticated,getMyProfile)
router.route("/otheruser/:id").get(isAuthenticated, getOtherUsers);
router.route("/follow/:id").post(isAuthenticated, follow);



module.exports = router