// server create garna

const express = require("express");
const app = express();
const noteModel = require("./model/note.model");

app.use(express.json());


//Created API to create note => POST & saved in DB also
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  const notes = await noteModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "Note created successfully",
    notes,
  });
});


// Creating API to get the data from theDB
app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        notes
    })
})


module.exports = app;
