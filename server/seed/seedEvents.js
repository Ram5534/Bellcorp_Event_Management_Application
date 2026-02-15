const mongoose = require('mongoose')
const Event = require('../models/Event')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)

Event.insertMany([
  {
    name: 'Tech Meetup',
    organiser: 'Google',
    location: 'Hyderabad',
    date: new Date(),
    description: 'Tech networking event',
    capacity: 2,
    category: 'Tech'
  },
  {
    name: 'Business Summit',
    organiser: 'Amazon',
    location: 'Bangalore',
    date: new Date(),
    description: 'Business growth event',
    capacity: 3,
    category: 'Business'
  },
  {
    name: 'Startup Workshop',
    organiser: 'Microsoft',
    location: 'Chennai',
    date: new Date(),
    description: 'Startup learning workshop',
    capacity: 5,
    category: 'Startup'
  },
  {
    name: 'AI Conference',
    organiser: 'OpenAI',
    location: 'Hyderabad',
    date: new Date(),
    description: 'AI and ML event',
    capacity: 4,
    category: 'Tech'
  },
  {
    name: 'Marketing Masterclass',
    organiser: 'Meta',
    location: 'Mumbai',
    date: new Date(),
    description: 'Marketing strategies event',
    capacity: 6,
    category: 'Marketing'
  },
  {
    name: 'Cloud Expo',
    organiser: 'IBM',
    location: 'Delhi',
    date: new Date(),
    description: 'Cloud computing event',
    capacity: 5,
    category: 'Tech'
  },
  {
    name: 'Finance Summit',
    organiser: 'Goldman Sachs',
    location: 'Mumbai',
    date: new Date(),
    description: 'Finance and investment event',
    capacity: 4,
    category: 'Finance'
  },
  {
    name: 'Design Bootcamp',
    organiser: 'Adobe',
    location: 'Bangalore',
    date: new Date(),
    description: 'UI/UX design event',
    capacity: 5,
    category: 'Design'
  },
  {
    name: 'Cyber Security Talk',
    organiser: 'Cisco',
    location: 'Hyderabad',
    date: new Date(),
    description: 'Cyber security awareness event',
    capacity: 3,
    category: 'Security'
  },
  {
    name: 'Data Science Meetup',
    organiser: 'TCS',
    location: 'Chennai',
    date: new Date(),
    description: 'Data science discussion event',
    capacity: 6,
    category: 'Tech'
  }
])
.then(() => {
  console.log('10 Events added successfully')
  process.exit()
})
.catch((err) => {
  console.log(err)
  process.exit()
})
