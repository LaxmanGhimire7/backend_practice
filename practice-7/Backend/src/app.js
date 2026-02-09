const express = require("express");
const app = express();
const userModel = require("./models/user.model");
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.post("/api/user", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userModel.create({ name, email, password });

  res.status(201).json({
    message: "User created successfully...",
    user,
  });
});

app.get("/api/user", async (req, res) => {
  const user = await userModel.find();
  res.status(200).json({
    message: "User fetched successfully..",
    user,
  });
});

app.delete("/api/user/:id", async (req, res) => {

    const id = req.params.id;

    await userModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "User deleted",
  });
});

app.patch("/api/user/:id",async(req,res)=>{
    const id = req.params.id;
  const {name,email}= req.body;
    await userModel.findByIdAndUpdate(id,{name,email})
    res.status(200).json({
        message:"User updated successfully"
    })
})

module.exports = app;
