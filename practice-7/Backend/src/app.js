

const express = require("express");
const app = express();
const userModel = require("./models/user.model")

app.use(express.json())

app.post("/api/user",async(req,res)=>{

    const {name, email, password} = req.body;
   const user = await userModel.create({name,email,password})

    res.status(201).json({
        message:"User created successfully...",
        user
    })
})

app.get("/api/user",async(req,res)=>{
    
   const user = await userModel.find()
    res.status(200).json({
        message:"User fetched successfully..",
        user
    })
})


module.exports = app;