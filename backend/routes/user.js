const express = require('express')
const router = express.Router()
const user = require('../controller/user/usercontroller')
router.post('/login',user.userLogin);


module.exports = router