const express = require('express');
const router = express.Router();
const { getEmployees, addEmployee } = require('../controllers/EmployeesC');

// router.get('/', getEmployees);
// router.post('/addemployee', addEmployee);

router.route('/').get(getEmployees);
router.route('/addemployee').post(addEmployee);


module.exports = router;
