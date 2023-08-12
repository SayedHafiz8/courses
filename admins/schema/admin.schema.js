const mongoose = require('mongoose');
const adminSchema=new mongoose.Schema({
    name :String,
    email:String,
    password:String,
    role:{type:String,default:"admin"}
}, {
    timestamps:true,
})


const Admin=mongoose.model("admin",adminSchema);
module.exports=Admin;