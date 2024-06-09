const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const databaseConnection = async () => {
    try {
   await mongoose.connect(process.env.MONGO_URL)
   console.log(`DB is connected successfully`)

        
    } catch (error) {
        console.log(`Database connection failed`, error.message)
        process.exit(1);
    }
}

module.exports =  databaseConnection