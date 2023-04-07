import express from 'express'
import { postJob, deleteJob } from "../controllers/jobs.js"

const router = express.Router()

router.post("/postajob", postJob)
router.delete("/:id", deleteJob)

export default router