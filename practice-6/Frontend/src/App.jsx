import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:3000/api/product").then((res) => {
      // console.log(res.data);
      setProduct(res.data.products);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {productName,productDescription,rating,price,image} = e.target.elements
    // const data = e.target.elements;
    axios.post("http://localhost:3000/api/product", {
      productName: productName.value,
      productDescription: productDescription.value,
      rating: rating.value,
      price: price.value,
      image: image.value,
    })
    .then(res=>{
      console.log(res.data)
      fetchData()
    })
  };

  const handleDelete = (productId) =>{
     console.log(productId)
     axios.delete(`http://localhost:3000/api/product/${productId}`)
     .then(res=>{
      fetchData()
     })
  }




  return (
    <>
      <main>
        <div className="create-product">
          <form onSubmit={handleSubmit}>
            <input type="text" name="image" placeholder="Image URL" />
            <input
              type="text"
              name="productName"
              placeholder="Product's Name"
            />
            <input
              type="text"
              name="productDescription"
              placeholder="Product's Description"
            />
            <input type="number" name="price" placeholder="Give Price" />
            <input type="number" name="rating" placeholder="Give rating" />
            <button>Create Product</button>
          </form>
        </div>

        <div className="products-card">
          {product.map((item) => {
            return (
              <div key={item._id} className="product">
                <img src={item.image} alt="" />
                <h1>{item.productName}</h1>
                <p>{item.productDescription}</p>
                <p>{item.price}</p>
                <p>{item.rating}</p>
                <button onClick={()=>{
                  handleDelete(item._id)
                }}>Delete Product</button>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default App;
