const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
productName:String,
color:String,
price:Number
})

const productModel = mongoose.model("products",productSchema);
module.exports =  productModel;


