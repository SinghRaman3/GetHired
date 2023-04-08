import User from "../models/user.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/createError.js";

export const signup = async (req, res, next) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            email: req.body.email,
            userName: req.body.userName,
            password: hash
        });

        await newUser.save()
        res.json("User created successfully")
    } catch (error) {
        next(error);
    }
}
export const signin = async(req, res, next) => {
    try {
        const user = await User.findOne({userName : req.body.userName})

        if(!user) return next(createError(401, "Please login with valid credentials"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)

        if(!isPasswordCorrect) return res.status(401).json("Incorrect password")

        res.json("Logged in successfully")
    } catch (error) {
        next(error)
    }
} 

