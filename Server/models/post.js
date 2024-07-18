const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  likes: [{ type: ObjectId, ref: "User" }],
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

mongoose.model("Post", postSchema);

// const mongoose = require('mongoose')
// const {ObjectId} = mongoose.Schema.Types
// const postSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     body:{
//         type:String,
//         required:true
//     },
//     photo:{
//         type:String,
//         default:"no photo"
//     },
//     postedBy:{
//         type:ObjectId, //id of person who created this post from User
//         ref:"User" //establishing relation bw 2 models
//     }
// })

// mongoose.model("Post",postSchema)
