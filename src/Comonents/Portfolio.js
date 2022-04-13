import React from "react";
import "./Portfolio.css";
import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
// import IMG4 from "../assets/portfolio4.jpg";
// import IMG5 from "../assets/portfolio5.png";
// import IMG6 from "../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "CHANGEME",
    github: "https://github.com/KujoKun/CHANGEME",
    demo: "https://github.com/KujoKun/CHANGEME",
  },
  {
    id: 2,
    image: IMG2,
    title: "CHANGEME",
    github: "https://github.com/KujoKun/CHANGEME",
    demo: "https://github.com/KujoKun/CHANGEME",
  },
  {
    id: 3,
    image: IMG3,
    title: "CHANGEME",
    github: "https://github.com/KujoKun/CHANGEME",
    demo: "https://github.com/KujoKun/CHANGEME",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio--container">
        {data.map((portfolio) => {
          return (
            <article key={portfolio.id} className="portfolio--item">
              <div className="portfolio--item-image">
                <img
                  loading="lazy"
                  src={portfolio.image}
                  alt={portfolio.title}
                />
              </div>
              <h3>{portfolio.title}</h3>
              <div className="portfolio--item-cta">
                <a href={portfolio.github} className="btn">
                  Github
                </a>
                <a
                  href={portfolio.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
