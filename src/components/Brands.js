import React from "react";

import godrej from "../images/logo-godrej.png";
import oppo from "../images/logo-oppo.png";
import cocacola from "../images/logo-coca-cola.png";
import paypal from "../images/logo-paypal.png";
import philips from "../images/logo-philips.png";

function Brands() {
  return (
    <div className="brands">
      <div className="small-container">
        <div className="row">
          <div className="col-5">
            <img src={godrej} alt="brand_images"></img>
          </div>
          <div className="col-5">
            <img src={oppo} alt="brand_images"></img>
          </div>
          <div className="col-5">
            <img src={cocacola} alt="brand_images"></img>
          </div>
          <div className="col-5">
            <img src={paypal} alt="brand_images"></img>
          </div>
          <div className="col-5">
            <img src={philips} alt="brand_images"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
