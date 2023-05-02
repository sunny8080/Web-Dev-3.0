const mongoose = require("mongoose");

const { MONGODB_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB connected successfully"))
    .catch((err) => {
      console.log("DB CONNECTION failed");
      console.log(err);
      process.exit(1);
    });
};
