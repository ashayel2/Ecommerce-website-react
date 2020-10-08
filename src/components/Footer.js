import React from "react";

import logoWhite from "../images/logo-white.png";
import playStore from "../images/play-store.png";
import appStore from "../images/app-store.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and iOS</p>
            <div className="app-logo">
              <img src={playStore} alt="logo"></img>
              <img src={appStore} alt="logo"></img>
            </div>
          </div>
          <div className="footer-col-2">
            <img src={logoWhite} alt="logo"></img>
            <p>Download App for Android and iOS</p>
          </div>
          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3>Useful Links</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <p className="copyright">Copyright@2020</p>
      </div>
    </div>
  );
}

export default Footer;
