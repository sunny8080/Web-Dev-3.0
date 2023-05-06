const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add employee name"]
  },
  email: {
    type: String,
    required: [true, "Please add employee email id"],
    unique: true,
  },
  title: {
    type: String,
    required: [true, "Please add employee title"]
  },
  department: {
    type: String,
    required: [true, "Please add employee department"],
    maxLength: 20,
  },
  role: {
    type: String,
    required: [true, "Please add employee role"]
  },
  image: {
    type: String,
  },
});

employeeSchema.pre('save', async function (next) {
  this.image = `https://api.dicebear.com/5.x/initials/svg?seed=${this.name}`;
  next();
});

module.exports = mongoose.model('Employee', employeeSchema);
