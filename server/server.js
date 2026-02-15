const express = require('express')
const dotEnv = require('dotenv')
const app = express()
const PORT = 5000
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const eventRouter = require('./routes/eventRoutes')

dotEnv.config()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)

.then(()=>{
    console.log("MongoDB Connected Succefully")
})
.catch((error)=>{
    console.log(error)
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})



app.use('/user', userRoutes)

app.use('/event', eventRouter)


