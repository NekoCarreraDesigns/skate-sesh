const express = require("express");
const routes = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

routes.post("/user-sign-up", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
      res
        .status(400)
        .json({ message: "User already exists, try a different username" });
    }

    const pinkSalt = 13;
    const hashedPassword = await bcrypt.hash(password, pinkSalt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Registration Successful!" });
  } catch (error) {
    res.status(500).json({ message: "Registration error", error });
  }
});

module.exports = routes;
