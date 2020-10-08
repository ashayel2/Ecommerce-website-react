import React from "react";

import offerImg from "../images/exclusive.png";

function Offer() {
  return (
    <div className="offer">
      <div className="small-container">
        <h2 className="title">Offers</h2>
        <div className="row">
          <div className="col-2">
            <img src={offerImg} alt="product" className="offer-img"></img>
          </div>
          <div className="col-2">
            <h1>Smart Fitness band 4</h1>
            <small>
              The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
              Amoled color full-touch display with adjustable brightness, so
              everything is clear as can be.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
