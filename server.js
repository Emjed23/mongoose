const express=require("express");
const app=express();

const connectDB=require('./config/connectDB');
const personShema = require("./config/Modules/personShema");

connectDB() ;

const addPerson=async()=>{
    const Hanen=new personShema({name:"Hanen",age:27,adresse:'Ariana',favoritFood:['pizza','poisson','spaghetti']})
    await
    Hanen.save()
    }
    // addPerson()
    
const addPerson1=async()=>{
    const Hamza=new personShema({name:"Hamza",age:25,adresse:'Bardo',favoritFood:['couscous','poisson','sandwich']})
    await
    Hamza.save()
    }
    // addPerson1()
    
const addPerson2=async()=>{
    const Rim=new  personShema({name:"Rim",age:30,adresse:'Ben Arous',favoritFood:['Jelbana','kaftaji','spaghetti']})
    await
    Rim.save()
    }
    // addPerson2()
const addPerson3=async()=>{
     const Safa=new  personShema({name:"Safa",age:30,adresse:'Ben Arous',favoritFood:['Jelbana','kaftaji','spaghetti']})
        await
        Safa.save()
        }
        // addPerson3()

 const deletePerson=async()=>{
        await  person.findByIdAndRemove("65baad111e2dee69feacaab8")

    }
   deletePerson
const  Getperson=async()=>{
    const person=await person.Find()
    console.log(person);
}
Getperson
const updatePerson=async()=>{
    await person.findByIdAndUpdate('65baad515a4f71bb2f254a14',{$set:{name:"zahra"}})

}
updatePerson




    const port= 4000
app.listen(port,(err)=>err?console.log(err):console.log("server is runing  on port ${port}"));

