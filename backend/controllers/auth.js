const jwt = require('jsonwebtoken')
require('dotenv').config();

 exports.isAuthenticated = async (req,res,next) => {
    try {
        const {token} = req.cookies;

        if(!token){
            return res.status(401).json({
                message:"User not Unauthorized"
            })
        }

        const decode = await jwt.verify(token,process.env.SECRET_KEY)

        req.user = decode.userId;

        next();

    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success:false,
        })
    }
}