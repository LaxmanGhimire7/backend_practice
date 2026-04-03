const express = require("express");
const app = express();
app.use(express.json())


const user = [];

app.post("/user",(req,res)=>{

    user.push(req.body)
    console.log(req.body)
    res.status(200).json({
        message:"User Created"
    })
    
})

app.get("/user",(req,res)=>{
    res.status(200).json({
        user
    })
})

app.delete("/user/:idx",(req,res)=>{
   console.log(req.params.idx)
   delete user[req.params.idx]
   res.status(200).json({
    message: "user is deletd"
   })
})

app.patch("/user/:idx",(req,res)=>{
    user[req.params.idx].names = req.body.names
    res.status(200).json({
        message:"updated"
    })
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000")
})