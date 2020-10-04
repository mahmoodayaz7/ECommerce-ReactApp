import React from "react";
import "./styles.scss";
import logo from "./../../assets/Logo.jpg";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="Hemanical Dreamz Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
