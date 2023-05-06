const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors')
const connectDB = require('./config/db')

// load models
const Employee = require('./models/Employee')

// read json data
const employees = require('./_data/employee.json')

// connect to db
connectDB();

// import to db
const importData = async () => {
  try {
    await Employee.create(employees);
    console.log(`Data Imported`.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`err`.red.inverse);
    process.exit(1);
  }
}

// delete from db
// WARNING : all data will be deleted from Bootcamp db
const deleteData = async () => {
  try {
    await Employee.deleteMany();
    console.log(`Data Deleted`.red.inverse);
    process.exit();
  } catch (err) {
    console.log(`err`.red.inverse);
    process.exit(1);
  }
}


if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}

