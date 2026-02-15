const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const auth = require('../middleware/verifyToken')

router.post('/add-user',userController.userRegistration)

router.post('/login',userController.userLogin)

router.get('/my-events', auth, userController.getMyEvents)

module.exports = router