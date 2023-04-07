import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv"
import cors from "cors"
import authRoute from "./routes/auth.js"
import recruiter from "./routes/recruiter.js"

const app = express();
const port = 7000;

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to Mongo")
    } catch (error) {
        throw(error)
    }
}

//middlewares
app.use(cors());
app.use(express.json())
app.use("/auth", authRoute)
app.use("/recruiter",recruiter)

app.get('/', (req, res) => {
    res.send("Yo")
})

app.listen(port, ()=> {
    connect()
    console.log(`App listening on port ${port}`)
})