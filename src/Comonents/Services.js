import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I've Studied</h5>
      <h2>Topics</h2>
      <div className="container services--container">
        <article className="service">
          <div className="service--head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service--list">
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* End of ui/ux */}
        <article className="service">
          <div className="service--head">
            <h3>Web Development</h3>
          </div>
          <ul className="service--list">
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* End of web dev */}
        <article className="service">
          <div className="service--head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service--list">
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF Content creation */}
      </div>
    </section>
  );
};

export default Services;
