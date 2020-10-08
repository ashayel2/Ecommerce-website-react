import React from "react";

import product12 from "../images/product-12.jpg";
import product6 from "../images/product-6.jpg";
import product8 from "../images/product-8.jpg";
import product9 from "../images/product-9.jpg";

function LatestProducts() {
  return (
    <div className="small-container">
      <div className="latest-products">
        <h2 className="title">Latest Products</h2>
        <div className="row">
          <div className="col-4">
            <img src={product12} alt="product"></img>
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
            <img src={product6} alt="product"></img>
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
            <img src={product8} alt="product"></img>
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
            <img src={product9} alt="product"></img>
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
    </div>
  );
}

export default LatestProducts;
