

const express = require("express");
const app = express();
const userModel = require("./models/user.model")

app.post("/api/user",async(req,res)=>{

    const {name, email, password} = req.body;
   const user = await userModel.create({name,email,password})

    res.status(201).json({
        message:"User created successfully...",
        user
    })
})


module.exports = app;