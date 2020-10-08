import React from "react";

import category1 from "../images/category-1.jpg";
import category2 from "../images/category-2.jpg";
import category3 from "../images/category-3.jpg";

function Categories() {
  return (
    <div className="small-container">
      <h2 className="title">Categories</h2>
      <div className="categories">
        <div className="row">
          <div className="col-3">
            <img src={category1} alt="categories"></img>
          </div>
          <div className="col-3">
            <img src={category2} alt="categories"></img>
          </div>
          <div className="col-3">
            <img src={category3} alt="categories"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
