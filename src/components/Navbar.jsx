import React from "react";
import airbnb from "../../public/img/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={airbnb} className="nav--logo" />
    </nav>
  );
}
