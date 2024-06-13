const mongoose = require('mongoose')

const userSchema = ({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    followers:{
        type:Array,
        default:[],
    },
    following:{
        type:Array,
        default:[],
    },
    bookmarks:{
        type:Array,
        default:[],
    }
});

module.exports  = mongoose.model("User",userSchema);