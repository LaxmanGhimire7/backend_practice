const express = require("express");
const app = express();
app.use(express.json())

const product = [];

app.post("/api/product",(req,res)=>{
    console.log(req.body)
    product.push(req.body)
    res.status(201).json({
        message:"Product created...."
    })
})

app.get("/api/product",(req,res)=>{
    res.status(200).json({
        product:product
    })
})

app.delete("/api/product/:idx",(req,res)=>{
    console.log(req.params.idx)
    delete product[req.params.idx];
    res.status(200).json({
        message:"Product Deleted"
    })

})

app.patch("/api/product/:idx",(req,res)=>{
    console.log(req.params.idx)
    product[req.params.idx].productName = req.body.productName;
    res.status(200).json({
        message:"Edited",
    })
})












module.exports = app;