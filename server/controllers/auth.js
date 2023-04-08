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
        
    } catch (error) {
        next(error)
    }
} 