const express = require("express");
const routes = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

routes.post("/user-sign-up", async (req, res) => {
  try {
    const { firstName, username, email, password } = req.body;
    const userExists = await User.findOne({
      $or: [{ username }, { email }],
    });

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      res.status(400).json({ message: "Invalid email address" });
      return;
    }

    if (password.length < 8) {
      res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
      return;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);

    if (!hasUppercase || !hasLowercase || !hasDigit) {
      res.status(400).json({
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
      });
      return;
    }

    if (userExists) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const pinkSalt = 13;
    const hashedPassword = await bcrypt.hash(password, pinkSalt);

    const newUser = new User({
      firstName,
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
