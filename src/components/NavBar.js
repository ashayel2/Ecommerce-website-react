import React from "react";

import Logo from "./Logo";
import Nav from "./Nav";

function NavBar() {
  return (
    <div className="navbar">
      {<Logo />}
      {<Nav />}
    </div>
  );
}

export default NavBar;
