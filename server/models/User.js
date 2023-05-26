const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: ["true", "Please provide firstname"],
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: ["true", "Please provide lastname"],
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: ["true", "Please provide email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide valid email"],
    },
    password: {
      type: String,
      required: [true, "Provide password"],
      minlength: [8, "Password is less than 8 characters"],
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    location: String,
    occupation: String,
    viewedProfile: { type: Number, default: 1010 },
    impressions: {
      type: Number,
      default: 100,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
