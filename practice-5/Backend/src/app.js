/**
 * server config
 * api creation
 */
const express = require("express");
const app = express();
const cors = require("cors")
const userModel = require("./model/user.model");
app.use(cors());
app.use(express.json());

/**
 * POST -> Create user and store in database
 * {fullName, email, age, phoneNumber, address} = req.body;
 */
app.post("/api/user", async (req, res) => {
  const { fullName, email, age, phoneNumber, address } = req.body;
  const user = await userModel.create({
    fullName,
    email,
    age,
    phoneNumber,
    address,
  });
  res.status(201).json({
    message: "User created",
    user,
  });
});


/**
 * GET -> fetching user data from userModel
 * using find method
 */
app.get("/api/user",async(req,res)=>{
    const user = await userModel.find();
    res.status(200).json({
        message:"Users fetched successfully...",
        user
    })
})

/**
 * DELETE -> deleting user accoring to the given id
 * id = req.params.id
 */

app.delete("/api/user/:id",async(req,res)=>{

    const id = req.params.id;
    const deleteUser = await userModel.findByIdAndDelete(id);
    res.status(200).json({
        message:"User deleted successfully...",
    })
})

/**
 * PATCH -> UPDATE ANYTHING YOU WANT
 */

app.patch("/api/user/:id",async(req,res)=>{
    // console.log(req.params.id)
    const id = req.params.id;
    const {fullName,age,address} = req.body;
    await userModel.findByIdAndUpdate(id, {fullName, age, address})
    res.status(200).json({
        message:"User updated successfully..."
    })
})

module.exports = app;
