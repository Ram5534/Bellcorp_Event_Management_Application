const Event = require('../models/Event')
const User = require('../models/User')

/* Get all events + search + filter */
const getEvents = async (req, res) => {
  try {
    let query = {}

    if (req.query.search) {
      query.name = { $regex: req.query.search, $options: 'i' }
    }

    if (req.query.location) {
      query.location = req.query.location
    }

    if (req.query.category) {
      query.category = req.query.category
    }

    const events = await Event.find(query)
    res.json(events)

  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' })
  }
}

const registerEvent = async (req, res) => {
  try {
    const eventId = req.params.id
    const userId = req.userId   

    const event = await Event.findById(eventId)
    const user = await User.findById(userId)

    if (!event || !user) {
      return res.status(404).json({ message: 'Event or User not found' })
    }

    const alreadyRegistered = event.registrations.some(
      id => id.toString() === userId.toString()
    )

    if (alreadyRegistered) {
      return res.status(400).json({ message: 'Already registered' })
    }

    if (event.registrations.length >= event.capacity) {
      return res.status(400).json({ message: 'Event full' })
    }

    event.registrations.push(userId)
    user.registeredEvents.push(eventId)

    await event.save()
    await user.save()

    res.json({ message: 'Registered successfully' })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Registration failed' })
  }
}

const cancelEvent = async (req, res) => {
  try {
    const eventId = req.params.id
    const userId = req.userId  

    const event = await Event.findById(eventId)
    const user = await User.findById(userId)

    if (!event || !user) {
      return res.status(404).json({ message: 'Event or User not found' })
    }

    event.registrations = event.registrations.filter(
      id => id.toString() !== userId.toString()
    )

    user.registeredEvents = user.registeredEvents.filter(
      id => id.toString() !== eventId.toString()
    )

    await event.save()
    await user.save()

    res.json({ message: 'Registration cancelled successfully' })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Cancel failed' })
  }
}


module.exports = {
  getEvents,
  registerEvent, cancelEvent
}
