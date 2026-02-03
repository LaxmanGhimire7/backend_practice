const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:String,
    productDescription:String,
    price:Number,
    image:String,
    rating:Number,
})

const productModel = mongoose.model("products",productSchema);
module.exports = productModel;