import React from "react";

import user1 from "../images/user-1.png";
import user2 from "../images/user-2.png";
import user3 from "../images/user-3.png";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="small-container">
        <div className="row">
          <div className="col-3">
            <i className="fa fa-quote-left"></i>

            <p>
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value.
            </p>
            <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <img src={user1} alt="user_images"></img>
            <h3>Brandy Chase </h3>
          </div>
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value.
            </p>
            <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <img src={user2} alt="user_images"></img>
            <h3>Sean Bean</h3>
          </div>
          <div className="col-3">
            <i className="fa fa-quote-left"></i>

            <p>
              The href attribute requires a valid value to be accessible.
              Provide a valid, navigable address as the href value.
            </p>
            <div className="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <img src={user3} alt="user_images"></img>
            <h3>Cory Adams </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
