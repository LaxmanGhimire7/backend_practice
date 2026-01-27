const express = require("express")
const app = express();
app.use(express.json())


const notes = []

app.post("/notes",(req,res)=>{
   notes.push(req.body)
   console.log(req.body)
   res.status(200).json({
    message:"Note created successfully"  
   })
})

app.get("/notes",(req,res)=>{
    res.status(201).json({
        notes:notes
    })
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
  res.status(200).json({
    message:"Deleted successfully"
  })
})

app.patch("/notes/:id",(req,res)=>{
    notes[req.params.id].description = req.body.description
    res.status(200).json({
        message:"Updated successfully"
    })
})

module.exports = app;