const User = require('../models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

require('dotenv').config();

exports.Register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        if (!name || !username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }

        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            return res.status(409).json({
                message: "User already exists",
                success: false,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            username,
            email,
            password: hashedPassword,
        });

        delete user.password;

        return res.status(201).json({
            message: "Account created successfully",
            data: user,
            success: true,
        });

    } catch (error) {
        return res.status(500).json({
            message: "User cannot be created. Please try again later!",
            error: error.message,
            success: false,
        });
    }
}

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User not registered with this email",
                success: false,
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect password",
                success: false,
            });
        }

        const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" });

        res.cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            httpOnly: true,
        });

        return res.status(200).json({
            message: `Welcome back ${user.name}`,
            success: true,
        });

    } catch (error) {
        return res.status(500).json({
            message: "User cannot login. Please try again later.",
            error: error.message,
            success: false,
        });
    }
}

exports.Logout = (req,res) =>{
    res.cookie("token","",{
        maxAge : new Date(Date.now())
    });

    return res.status(201).json({
        message: "User logged out successfully.",
        sucess: true,
        })
}

exports.bookmark = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const user = await User.findById(loggedInUserId);
        if (user.bookmarks.includes(tweetId)) {
            // remove
            await User.findByIdAndUpdate(loggedInUserId, { $pull: { bookmarks: tweetId } });
            return res.status(200).json({
                message: "Removed from bookmarks."
            });
        } else {
            // bookmark
            await User.findByIdAndUpdate(loggedInUserId, { $push: { bookmarks: tweetId } });
            return res.status(200).json({
                message: "Saved to bookmarks."
            });
        }
    } catch (error) {
        console.log(error);
    }
};