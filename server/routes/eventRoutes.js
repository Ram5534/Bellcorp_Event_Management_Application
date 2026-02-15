const express = require('express')
const router = express.Router()
const eventController = require('../controllers/eventController')
const auth = require('../middleware/verifyToken')

router.get('/',auth, eventController.getEvents)
router.post('/:id/register',auth, eventController.registerEvent)
router.post('/:id/cancel',auth, eventController.cancelEvent)


module.exports = router
