import mongoose from "mongoose";

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  isEmployer: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("User", User)