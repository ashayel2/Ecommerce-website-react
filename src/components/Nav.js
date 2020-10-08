import React from "react";

import cart from "../images/cart.png";
import menu from "../images/menu.png";

function Nav() {
  return (
    <div className="nav">
      <ul id="MenuItems">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
      </ul>
      <img
        src={cart}
        className="cart-icon"
        height="30px"
        width="30px"
        alt="cart"
      ></img>

      <img src={menu} className="menu-icon" height="30px" alt="menu"></img>
    </div>
  );
}

export default Nav;
