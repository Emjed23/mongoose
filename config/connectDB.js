const mongoose=require("mongoose")

const connectDB=()=>{
    mongoose.connect("mongodb+srv://harabiamjed:<1234>@cluster0.xhvpr08.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log('db connected '))
    .catch((err)=>
        console.log(err))

}
module.exports=connectDB;