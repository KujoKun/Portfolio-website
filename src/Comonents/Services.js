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
              <p>
                Typography - making something legible, readable & appealing.
              </p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>
                Colors - Contrasts & tints, matching to website personality.
              </p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Images - Product photos, storytelling photos & use cases.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>
                Icons - SVG format, shapes & context, product feature blocks.
              </p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Shadows - Small doses of shadows, drawing attention.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>
                Border-radius - Matching with typefaces, use cases on elements.
              </p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>UX - CTAs, fast animations, offer feedback on actions.</p>
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
              <p>
                Utilizing JavaScript to make interactive behaviour to websites.
              </p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Using JavaScript frameworks to create SPAs & robust UIs.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Responsive webdesgin, mobile first/desktop first design.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Object-Oriented/functional programming with JavaScript.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Working with APIs & external libraries. </p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>
                Using Git for version controll & Github repos for deployment.
              </p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Conditionally rendering components & rendering lists.</p>
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
              <p>Creating a website from scratch without any libraries.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Utilizing the MVC design pattern for websites.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>
                Taking original images/ill&shy;ustrations & showcasing them.
              </p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>
                Combining components to layouts using common layout patterns
              </p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Using common elements & components to convey the info.</p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>
                Creating testimonials, call-to-action sections, highlight
                sections.
              </p>
            </li>
            <li>
              <BiCheck className="service--list-icon" />
              <p>Using whitespaces strategically to emphasize elements.</p>
            </li>
          </ul>
        </article>
        {/* END OF Content creation */}
      </div>
    </section>
  );
};

export default Services;
