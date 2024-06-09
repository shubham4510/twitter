const express = require('express')
const {Register} = require('../controllers/userController.js')

const router = express.Router();

router.post("/register",Register)

module.exports = router