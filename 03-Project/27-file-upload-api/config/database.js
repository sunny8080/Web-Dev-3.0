const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });

module.exports = connectDB = async () => {
  try {
    // WARNING :- useNewUrlParser and useUnifiedTopology is deprecated or not ???
    // working fine, no errors !! 
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
      console.log(`MongoDb connected : ${conn.connection.host}`.cyan.underline.bold);
    }
  } catch (err) {
    console.log(`${err.message}`.red.underline.bold);
  }
}

