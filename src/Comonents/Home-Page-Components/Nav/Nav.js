import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageRoundedDots } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {/*  eslint-disable-next-line  */}
      <Link
        to="header"
        onSetActive={() => setActiveNav("#")}
        spy={true}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome rel="Home icon" aria-label="Home icon" />
      </Link>
      <Link
        to="about"
        // offset={-50}
        spy={true}
        onSetActive={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser
          alt="About section icon"
          aria-label="About section icon"
        />
      </Link>
      <Link
        to="experience"
        spy={true}
        onSetActive={() => setActiveNav("#experience")}
        offset={-50}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook
          alt="Experience section icon"
          aria-label="Experience section icon"
        />
      </Link>
      <Link
        to="service"
        offset={-150}
        spy={true}
        onSetActive={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine
          alt="Service section icon"
          aria-label="Service section icon"
        />
      </Link>
      <Link
        to="contact"
        offset={-50}
        spy={true}
        onSetActive={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageRoundedDots
          alt="Contact section icon"
          aria-label="Contact section icon"
        />
      </Link>
    </nav>
  );
};

export default Nav;
