const User = require('../models/userSchema')
const bcrypt = require('bcrypt')

   exports.Register = async (req,res) => {
    try {
        const {name,username,email,password} = req.body;
        if(!name || !username || !email || !password){
            return res.status(401).json({
                message:"All fields are required",
                success:false,
            })
        }

        const user = await User.findOne({email})
        if(user){
            return res.status(401).json({
                message:"User already exist",
                success:false,
            })
        }

        const hashedPassword = await bcrypt.hash(password,10);

        await User.create({
            name,
            username,
            email,
            password:hashedPassword,
        })

        return res.status(201).json({
            message:"Account created successfully",
            success:true,
        })

    } catch (error) {
        return res.status(500).json({
            message:"User cannot be created Please try again later!",
            error:error.message,
            success:false,
        })
    }
}

