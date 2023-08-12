const  mongoose  = require("mongoose");

const userSchem = new mongoose.Schema({
    name:String ,
    email: String,
    password:String,
    age:Number,

    role:{type:String , default:'student'}

},{
    timestamps:true,
})

module.exports=mongoose.model("user",userSchem);