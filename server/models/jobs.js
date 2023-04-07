import mongoose from "mongoose";

const Job = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: true,
  },

  companyLogo: {
    type: String,
  },

  location: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  requiredSkills: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Job", Job)