/**
 * server lai config
 * api creation
 */
const express = require("express");
const app = express();
const productModel = require("./model/product.model");
const cors = require("cors")

app.use(cors())
app.use(express.json());

/**
 * - POST /api/notes
 * - create new note and save data in mongodb
 * - req.body = {title,description}
 */

app.post("/api/product", async (req, res) => {
  const { productName, productDescription, rating, price, image } = req.body;
  const product = await productModel.create({
    productName,
    productDescription,
    rating,
    price,
    image,
  });
  res.status(201).json({
    message: "Product created successfully...",
    product,
  });
});

/**
 * - GET /api/notes
 * - Fetch all the notes data from mongodb and send them in the response
 */

app.get("/api/product", async (req, res) => {
  const products = await productModel.find();
  res.status(200).json({
    message: "Product fetched successfully...",
    products,
  });
});

/**
 * - DELETE /api/notes/:id
 * - Delete note with the id from req.params
 */

app.delete("/api/product/:id",async(req,res)=>{
 const id = req.params.id;
   await productModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"Product deleted successfully..."
    })
})



/**
 * - PATCH /api/notes/:id
 * - update the description of the note by id
 * - req.body = {description}
*/

app.patch("/api/product/:id", async (req, res) => {
    const id = req.params.id;
    const { productName, productDescription, rating, price } = req.body;
    await productModel.findByIdAndUpdate(id, {
        productName,
        productDescription,
        rating,
        price,
    });
    res.status(200).json({
        message: "Product updated successfully....",
    });
});


module.exports = app;