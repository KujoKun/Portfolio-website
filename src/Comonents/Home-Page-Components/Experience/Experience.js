import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills Do I Have?</h5>
      <h2>My Experience</h2>
      <div className="container experience--container">
        <div className="experience--frontend">
          <h3>Frontend Development</h3>
          <div className="experience--content">
            <article className="experience--details">
              <BsPatchCheckFill className="experience--details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience--details">
              <BsPatchCheckFill className="experience--details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience--details">
              <BsPatchCheckFill className="experience--details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience--details">
              <BsPatchCheckFill className="experience--details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience--details">
              <BsPatchCheckFill className="experience--details-icon" />
              <div>
                <h4>React-Redux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience--backend">
          <h3>Backend Development</h3>
          <div className="experience--content">
            <article className="experience--details">
              <BsPatchCheckFill className="experience--details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience--details">
              <BsPatchCheckFill className="experience--details-icon" />
              <div>
                {" "}
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience--details">
              <BsPatchCheckFill className="experience--details-icon" />
              <div>
                {" "}
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
