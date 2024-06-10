const Tweet = require('../models/tweetSchema')

exports.createTweet = async (req,res) =>{
    try {
        const {description,id} = req.body;
        if(!description ||!id){
            return res.status(401).json({
                message:"All fields are required",
                success:false
            })
        }

        await Tweet.create({
            description,
            userId:id
        })

        return res.status(201).json({
            message:"Tweet created successfully.",
            success:true,
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Tweet cannot be created",
            error:error.message,
            success:false,
        })
    }
}

exports.deleteTweet = async (req,res) => {
    try {
        const {id} = req.params;
        await Tweet.findByIdAndDelete(id);
        return res.status(200).json({
            message:"Tweet deleted successfully",
            success:true,
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Tweet cannot be deleted",
            error:error.message,
            success:false,
        })
    }
}

exports.likeOrDislike = async (req,res) => {
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const tweet = await Tweet.findById(tweetId);

        if(tweet.likes.includes(loggedInUserId)){ // changed like to likes
            //dislike
            await Tweet.findByIdAndUpdate(tweetId,{$pull:{likes:loggedInUserId}})

            return res.status(200).json({
                message:"User disliked your tweet"
            })
        }
        else{
            await Tweet.findByIdAndUpdate(tweetId,{$push:{likes:loggedInUserId}})
            return res.status(200).json({
                message:"User liked your tweet"
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            message:error.message,
            success:false,
        })
    }
}