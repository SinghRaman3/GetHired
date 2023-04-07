import User from "../models/user.js"
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    try {
        if (await User.findOne(req.body.userName)) throw new createError("Username not available");
        if(await User.findOne(req.body.email)) res.json("This email is already registered")

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            email: req.body.email,
            userName: req.body.userName,
            password: hash
        });

        // if(await newUser.findOne(userName)) res.json("Username not available")
        // if(await newUser.findOne(email)) res.json("This email is already registered")

        await newUser.save()
        res.json("User created successfully")
    } catch (error) {
        res.json(error);
    }
}
export const signin = () => {} 