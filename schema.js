const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    username :String,
    message : {type : String, required},
    commentedAt : {type : Date, default : Date.now()},
})

const blogSchema = new mongoose.Schema({
    title: {type : String, required : true, min : 5},
    content : {type : String, required : true, min : 50},
    author : {type : String},
    tags : {type : [String]},
    category : {type : String, default : "General"},
    likes : {type : [String]},
    createdAt : {type : Date, default : Date.now()},
    updateAt : {type : Date},
    comment : commentSchema,
})

