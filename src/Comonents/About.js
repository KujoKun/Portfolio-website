import React from "react";
import "./About.css";
import "../index.css";
import ME from "../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Heart from "../assets/heart.svg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about--container">
        <div className="about--me">
          <div className="about--me-img">
            <img
              loading="lazy"
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
              <small>2 Years</small>
            </article>
            <article className="about--card">
              <FiUsers className="about--icon" />
              <h5>Courses</h5>
              <small>5 courses</small>
            </article>
            <article className="about--card">
              <VscFolderLibrary className="about--icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>
            I started learning web development at the start of the pandemic and
            I have loved it ever since. I started of with JavaScript as opposed
            to html/css to see if I would enojy it, and I absolutely loved
            Javascript!
            <br /> I love learning new concepts and new tooling and can't wait
            to start my proffesional career within the industry.
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
