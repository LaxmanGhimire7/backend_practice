const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect("mongodb+srv://lakxh-practice:IHfSZ6GKXA2m0QOZ@cluster0.qs1wzl6.mongodb.net/practice-6")
    .then(()=>{
        console.log("Connected to DB...")
    })
}

module.exports = connectToDb;