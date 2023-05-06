const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cors = require("cors");
const path = require("path");

dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 5000;

// use cors functionality
app.use(
  cors({
    origin: "*",
  })
);

// Connect to database
connectDB();

// Middleware - body parser
app.use(express.json())

if (process.env.NODE_ENV === "DEVELOPMENT") {
  app.use(morgan("dev"))
}

// set static folders
app.use(express.static(path.join(__dirname, "public")));

// Routes files
const employees = require('./routes/EmployeesR');

// Mount routes
app.use('/api/v1/employees', employees);


// app.get('/', (req, res, next) => {
//   res.status(200).send("Hello Sir JI, Namaskar");
// })

app.listen(PORT, () => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
  }
})
