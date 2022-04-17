import React from "react";
import "./Portfolio.css";
import IMG1 from "assets/ytapp.png";
import IMG2 from "assets/photoapp.png";
import IMG3 from "assets/widgetapp.png";
import IMG4 from "assets/notesapp.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Youtube player",
    github: "https://github.com/KujoKun/yt-app",
    demo: "https://yt-app-eta.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Picture app with searchbar",
    github: "https://github.com/KujoKun/Small-pictures-app-with-searchbar",
    demo: "https://pictures-app-tau.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Widgets",
    github: "https://github.com/KujoKun/widgets",
    demo: "https://widgets-xi-smoky.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Notes",
    github: "https://github.com/KujoKun/notes",
    demo: "https://notes-olive-two.vercel.app/",
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
                <a
                  href={portfolio.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
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
