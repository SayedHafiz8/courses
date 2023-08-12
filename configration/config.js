const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const connaction=()=>{
    return mongoose
    .connect(process.env.CONNECTION_STRING)
    .then((result)=> console.log("db connected"))
    .catch((err)=> console.log(err))

}
module.exports=connaction;