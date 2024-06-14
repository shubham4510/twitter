const Tweet = require('../models/tweetSchema.js');

exports.createTweet = async (req, res) => {
    try {
        const { description, id } = req.body;
        if (!description ||!id) {
            return res.status(401).json({
                message: "All fields are required",
                success: false
            });
        }

        const tweet = new Tweet({
            description,
            userId: id
          });
          await tweet.save();

        return res.status(201).json({
            message: "Tweet created successfully.",
            success: true,
            tweet
        });
    } catch (error) {
        return res.status(500).json({
            message: "Tweet cannot be created",
            error: error.message,
            success: false
        });
    }
};

exports.deleteTweet = async (req, res) => {
    try {
        const { id } = req.params;
        const tweet = await Tweet.findByIdAndDelete(id);

        if (!tweet) {
            return res.status(404).json({
                message: "Tweet not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Tweet deleted successfully",
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: "Tweet cannot be deleted",
            error: error.message,
            success: false
        });
    }
};

exports.likeOrDislike = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const tweet = await Tweet.findById(tweetId);

        if (!tweet) {
            return res.status(404).json({
                message: "Tweet not found",
                success: false
            });
        }

        if (tweet.likes.includes(loggedInUserId)) {
            // dislike
            await Tweet.findByIdAndUpdate(tweetId, { $pull: { likes: loggedInUserId } });

            return res.status(200).json({
                message: "User disliked your tweet"
            });
        } else {
            await Tweet.findByIdAndUpdate(tweetId, { $push: { likes: loggedInUserId } });

            return res.status(200).json({
                message: "User liked your tweet"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        });
    }
};


export const getAllTweets = async (req,res) => {
    // loggedInUser ka tweet + following user tweet
    try {
        const id = req.params.id;
        const loggedInUser = await User.findById(id);
        const loggedInUserTweets = await Tweet.find({userId:id});
        const followingUserTweet = await Promise.all(loggedInUser.following.map((otherUsersId)=>{
            return Tweet.find({userId:otherUsersId});
        }));
        return res.status(200).json({
            tweets:loggedInUserTweets.concat(...followingUserTweet),
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        });    }
}
export const getFollowingTweets = async (req,res) =>{
    try {
        const id = req.params.id;
        const loggedInUser = await User.findById(id); 
        const followingUserTweet = await Promise.all(loggedInUser.following.map((otherUsersId)=>{
            return Tweet.find({userId:otherUsersId});
        }));
        return res.status(200).json({
            tweets:[].concat(...followingUserTweet)
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        });    }
}
 