// Importing the Mongoose library
const mongoose = require('mongoose');
const dotenv = require('dotenv')

// load env vars
dotenv.config({ path: './config/config.env' })

// Defining a function to connect to the database
connectDB = async () => {
  // Connecting to the database using the provided URL from the environment variables
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (process.env.NODE_ENV === "DEVELOPMENT") {
      // If the connection is successful, log a success message
      console.log(`MongoDb connected : ${conn.connection.host}`.cyan.underline.bold);
    }
  } catch (err) {
    // If there are issues connecting to the database, log an error message and exit the process
    // console.log(err.message);
    console.log(`DB CONNECTION ISSUE`.red.underline.bold);
    process.exit(1);
  }


}


module.exports = connectDB;
