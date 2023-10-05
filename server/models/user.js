const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  tricks: [
    {
      trickName: String,
      totalTried: Number,
      totalLanded: Number,
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
