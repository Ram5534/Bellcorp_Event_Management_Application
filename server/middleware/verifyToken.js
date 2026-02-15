const User = require('../models/User')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')

dotEnv.config()

const secretKey = process.env.WHATISYOURNAME

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: "Token not found" })
    }

    const token = authHeader.split(" ")[1]  

    if (!token) {
        return res.status(401).json({ error: "Token not found" })
    }

    try {
        const decoded = jwt.verify(token, secretKey)

        const user = await User.findById(decoded.userId)

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        req.userId = user._id
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({ error: "Invalid token" })
    }
}

module.exports = verifyToken
