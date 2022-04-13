import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "./../assets/superhero.png";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header--container">
        <h5>Hello I'm</h5>
        <h1>Jonathan Elf</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll--down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
