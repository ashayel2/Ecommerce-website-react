import React from "react";

import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";
import product3 from "../images/product-3.jpg";
import product4 from "../images/product-4.jpg";

function FeaturedProducts() {
  return (
    <div className="small-container">
      <h2 className="title">Featured Products</h2>
      <div className="row">
        <div className="col-4">
          <img src={product1} alt="product"></img>
          <h4>Red Printed T-shirt</h4>
          <div className="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <p>25..99$</p>
        </div>
        <div className="col-4">
          <img src={product2} alt="product"></img>
          <h4>Black Sneakers</h4>
          <div className="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <p>49.99$</p>
        </div>
        <div className="col-4">
          <img src={product3} alt="product"></img>
          <h4>Unisex Shoes</h4>
          <div className="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <p>30.00$</p>
        </div>
        <div className="col-4">
          <img src={product4} alt="product"></img>
          <h4>Navy blue T-shirt</h4>
          <div className="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <p>20.99$</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
