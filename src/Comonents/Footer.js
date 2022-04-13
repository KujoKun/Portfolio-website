import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#!" className="footer--logo">
        JohnnyBoi
      </a>
      <ul className="permalinks">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer--socials">
        <a href="https://www.facebook.com/JonathanElf97">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/elf_jonathan">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-elf/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/KujoKun">
          <FaGithub />
        </a>
      </div>
      <div className="footer--copyright">
        <small>&copy; Jonathan Elf</small>
      </div>
    </footer>
  );
};

export default Footer;
