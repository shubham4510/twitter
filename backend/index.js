const express = require('express')
const dotenv = require('dotenv')
const databaseConnection = require('./config/database.js')
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/userRoute.js')


databaseConnection();

dotenv.config({
    path:'.env'
})
const app = express()

//MIDLEWARES
app.use(express.urlencoded({
    extended:true,
}))

app.use(express.json())
app.use(cookieParser())

// API
app.use("/api/v1/user",userRoute);

app.get("/",(req,res) => {
     res.status(200).json({
        message:"coming from backend..."
     })
})

const PORT = process.env.PORT || 4000

app.listen(process.env.PORT,() =>{
    console.log(`Server listening at port: ${PORT}`)
})