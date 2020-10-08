import React from "react";

import NavBar from "./NavBar";

import Contents from "./Contents";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <NavBar />
        <Contents />
      </div>
    </div>
  );
}

export default Header;
