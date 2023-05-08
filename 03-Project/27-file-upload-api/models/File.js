const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
  },
  tags: [String],
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('File', fileSchema);
