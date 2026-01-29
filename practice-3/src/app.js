// server create garna
// server config garna

const express = require("express")
const app = express();
app.use(express.json())
const note = [];

app.post("/notes",(req,res)=>{
    note.push(req.body);

    res.status(201).json({
        message:"Note created",
    })
})

app.get("/notes",(req,res)=>{
    res.status(200).json({
        note
    })
})

app.delete("/notes/:index",(req,res)=>{

   delete note[req.params.index];
   res.status(200).json({
    message:"Note deleted successfully"
   })

})

app.patch("/notes/:id",(req,res)=>{
    note[req.params.id].title = req.body;
    res.status(200).json({
        message:"Title updated successful!"
    })
})

module.exports = app;