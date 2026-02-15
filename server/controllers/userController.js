const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotEnv = require('dotenv')
const Event = require('../models/Event')

dotEnv.config()

const secretKey = process.env.WHATISYOURNAME

const userRegistration = async(req,res)=>{
    const {username,email,password} = req.body
    try {
        const userEmail = await User.findOne({email});
        if(userEmail){
            return res.status(400).json({message:"User is already registered"})
        }

        const hashedPassword = await bcrypt.hash(password,10)
        
        const newUser = new User({
            username,email,password:hashedPassword
        })

        await newUser.save()
        res.status(201).json({message:"User Registered Succusesfully"})

    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error")
        
    }
}

const userLogin = async(req,res)=>{
    const {email,password} = req.body

    try {
        const userEmail = await User.findOne({email})

        if(!userEmail || !(await bcrypt.compare(password,userEmail.password))){
            return res.status(400).json("Invalid username or password")
        }

        const token = jwt.sign({userId:userEmail._id}, secretKey, {expiresIn:'1h'})

        const userId = userEmail._id

        res.status(200).json({message:"Login Successfully",token, userId})
        console.log(email,token)



    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server Error")
        
    }
}

const getMyEvents = async (req, res) => {
  try {
    const userId = req.userId

    const events = await Event.find({
      registrations: userId
    })

    res.json(events)

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to fetch events" })
  }
}

module.exports = {userRegistration, userLogin, getMyEvents}