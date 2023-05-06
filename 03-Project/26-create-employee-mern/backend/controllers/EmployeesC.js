const mongoose = require('mongoose');
const Employee = require('../models/Employee');

// @desc      Get All Employee
// @route     GET /api/v1/employees
// @access    Public
exports.getEmployees = async (req, res, next) => {
  try {
    const employeeData = await Employee.find({});
    return res.status(200).json({ success: true, data: employeeData })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

// @desc      Add Single Employee
// @route     POST /api/v1/employees/addemployee
// @access    Public
exports.addEmployee = async (req, res, next) => {
  // if (req.body.name) req.body.image = `https://api.dicebear.com/5.x/initials/svg?seed=${req.body.name}`;

  try {
    const employee = await Employee.create(req.body);
    return res.status(201).json({
      success: true,
      data: employee,
    })
  } catch (err) {
    // console.log(err);
    return res.status(404).json({
      success: false,
      error: err.message
    })
  }
};



