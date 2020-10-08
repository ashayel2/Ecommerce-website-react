import React from "react";

import Image1 from "../images/image1.png";

function Contents() {
  return (
    <div className="row">
      <div className="col-1">
        <h1>
          Give Your Workout<br></br>A New Style!
        </h1>
        <p>Success isn't always about hardwork. It's about consistency.</p>
        <a href="#" className="btn">
          Explore Now <br></br>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
      <div className="col-2">
        <img src={Image1} alt="product"></img>
      </div>
    </div>
  );
}

export default Contents;
