import React from "react";
import "./Testimonials.css";
import AVATAR1 from "./../assets/avatar1.jpg";
import AVATAR2 from "./../assets/avatar2.jpg";
import AVATAR3 from "./../assets/avatar3.jpg";
// import AVATAR4 from "./../assets/avatar4.jpg";

const data = [
  {
    avatar: AVATAR1,
    name: "Remco Van Straaten",
    review: "CHANGEME",
  },
  {
    avatar: AVATAR2,
    name: "Aliona",
    review: "CHANGEME",
  },
  {
    avatar: AVATAR3,
    name: "Cole",
    review: "CHANGEME",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials--container">
        {data.map(({ avatar, name, review }, i) => {
          return (
            <article key={i} className="testimonial">
              <div className="client--avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client--name">{name}</h5>
              <small className="client--review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
