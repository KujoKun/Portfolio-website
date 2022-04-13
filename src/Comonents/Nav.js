import React from "react";
import "./Nav.css";
import "./../index.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageRoundedDots } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {/*  eslint-disable-next-line  */}
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome rel="Home icon" aria-label="Home icon" />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser
          alt="About section icon"
          aria-label="About section icon"
        />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook
          alt="Experience section icon"
          aria-label="Experience section icon"
        />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine
          alt="Service section icon"
          aria-label="Serice section icon"
        />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageRoundedDots
          alt="Contact section icon"
          aria-label="Contact section icon"
        />
      </a>
    </nav>
  );
};

export default Nav;
