require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const User = require("./model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<h1>Hello from auth system - Sunny8080</h1>");
});

app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!(firstName && lastName && email && password)) {
      res.status(400).send("All fields are required");
    }

    const existingUser = await User.findOne({ email }); // PROMISE

    if (existingUser) {
      res.status(401).send("User already exists");
    }

    const myEncPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: myEncPassword,
    });

    // token
    // send token or send just success yes and redirect - choice
    const token = jwt.sign({ user_id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: "2h" });

    user.token = token;
    // update or not in db

    // handle pass situation :- don't send pass
    user.password = undefined;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("Field is missing");
    }

    const user = await User.findOne({ email });

    // if(!user){
    // 	req.status(400).res('You are not registered in our app')
    // }

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ user_id: user._id, email }, process.env.SECRET_KEY, { expiresIn: "2h" });
      user.token = token;
      user.password = undefined;
      // res.status(200).json(user);

      // if you want to use cookies
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
      });

      return;
    }

    res.status(400).send("Email or password is incorrect");
  } catch (err) {
    console.log("Error occurred in login");
    console.log(err);
  }
});

app.get("/dashboard", auth, (req, res) => {
  res.send("Welcome to secret information");
});

module.exports = app;
