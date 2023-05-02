const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: null,
  },

  lastName: {
    type: String,
    default: null,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
});

// mongoose and mongodb convert 'USer' to 'user ( always in lowercase  )
// module.exports = mongoose.model("UsER", userSchema); // same as
// module.exports = mongoose.model("user", userSchema); // same as
module.exports = mongoose.model("User", userSchema);
