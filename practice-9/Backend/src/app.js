const express = require("express");
const app = express();
app.use(express.json())

const productModel = require("./Model/product.model")


app.post("/api/product",async(req,res)=>{
    const {productName, color, price} = req.body;
    const product = await productModel.create({productName, color, price}) 
    console.log(product)
    res.status(201).json({
        message:"Product create successfully..",
        product
    })
})


app.get("/api/product",async(req,res)=>{
    const product = await productModel.find();
    res.status(200).json({
        message:"Product fetched successffully",
        product
    })
})




module.exports = app;