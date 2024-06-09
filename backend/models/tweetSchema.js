const mongoose = require('mongoose')


const tweetSchema = ({
    description:{
        type:String,
        required:true,
    },
    like:{
        type:Array,
        default:[]
    },
    bookmarks:{
        type:Array,
        default:[],
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
});
 
module.exports = mongoose.model("Tweet",tweetSchema);
 