const express = require("express");
const routes = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

routes.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ username: req.body.username });
    if (userExists) {
      res
        .status(400)
        .json({ message: "User already exists, try a different username" });
    }

    const pinkSalt = 13;
    const hashedPassword = await bcrypt.hash(req.body.password, pinkSalt);

    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "Registration error", error });
  }
});

module.exports = routes;
