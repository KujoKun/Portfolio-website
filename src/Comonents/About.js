import React from "react";
import "./About.css";
import "../index.css";
import ME from "../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about--container">
        <div className="about--me">
          <div className="about--me-img">
            <img
              alt="Jonathan elf with background from ontop of a hill"
              src={ME}
            />
          </div>
        </div>
        <div className="about--content">
          <div className="about--cards">
            <article className="about--card">
              <FaAward className="about--icon" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>
            <article className="about--card">
              <FiUsers className="about--icon" />
              <h5>Clients</h5>
              <small>200+ World Wide</small>
            </article>
            <article className="about--card">
              <VscFolderLibrary className="about--icon" />
              <h5>Projects</h5>
              <small>10+ Big Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            reiciendis, asperiores quae nulla voluptate ipsam cum tempora
            facilis expedita quis dolores recusandae voluptatibus accusantium
            nam sed, sunt libero alias veniam?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
