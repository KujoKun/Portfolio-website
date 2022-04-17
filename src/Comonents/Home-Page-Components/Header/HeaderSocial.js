import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header--socials">
      <a
        href="https://www.linkedin.com/in/jonathan-elf"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin alt="LinkedIn icon" aria-label="LinkedIn icon" />
      </a>
      <a href="https://github.com/KujoKun" target="_blank" rel="noreferrer">
        <FaGithub alt="GitHub icon" aria-label="Github icon" />
      </a>
    </div>
  );
};

export default HeaderSocial;
