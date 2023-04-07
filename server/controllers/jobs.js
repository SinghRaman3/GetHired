import Job from "../models/jobs.js";

export const postJob = async (req, res) => {
    const newJob = new Job(req.body);
    try {
        const savedJob = await newJob.save();
        res.json(savedJob)
    } catch (error) {
        throw(error)
    }
}

export const deleteJob = async (req, res) => {
    try {
    await Job.findByIdAndDelete(req.params.id);
    res.json("Deleted successfully");
  } catch (error) {
    throw error;
  }
};

