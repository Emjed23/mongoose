const mongoose=require('mongoose')

const {Schema}=mongoose

const personSchema= new Schema({
    name: {type:String , required:true},
    age : Number,
    adresse:{type:String} ,   
    favoritFood: [{type:String}]
}) 

module.exports=mongoose.model("person",personSchema)