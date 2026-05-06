const express = require("express");
const app = express();
app.use(express.json())

const users = [];

app.post("/users",(req,res)=>{
   users.push(req.body);
//    console.log(users)
   res.status(201).json({
    message:"User is created",
    users
   })
})

app.get("/users",(req,res)=>{
    res.status(200).json({
        message:"Users",
        users
    })
})

app.delete("/users/:id",(req,res)=>{
    delete users[req.params.id];
    res.status(200).json({
        message:"User is deleted",
    })
})

app.put("/users/:id",(req,res)=>{
    users[req.params.id].userName = req.body;
    res.status(200).json({
        message:"Updated"
    })
})

// http://localhost:3000/users


app.listen(3000,()=>{
    console.log("App is listening on port 3000...")
})