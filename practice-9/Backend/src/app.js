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

app.delete("/api/product/:id",async(req,res)=>{
    console.log(req.params.id)
    const id = req.params.id;
    await productModel.findByIdAndDelete(id);
    res.status(200).json({
        message:"Product deleted successfully.."
    })
})

app.patch("/api/product/:id",async(req,res)=>{
    const id = req.params.id;
    const {productName,price} = req.body;
    await productModel.findByIdAndUpdate(id,{productName,price})
    res.status(200).json({
        message:"Product Updated successfully",
       
    })
})

module.exports = app;