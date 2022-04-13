import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
// import AVATAR1 from "./../assets/avatar1.jpg";
// import AVATAR2 from "./../assets/avatar2.jpg";
// import AVATAR3 from "./../assets/avatar3.jpg";
// import dataSlider from "./dataSlider";

export default function Slider({ testimonialData: data }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div key={data.id} className="container-slider">
      {data.map(({ avatar, name, review, id }, index) => {
        return (
          <div
            key={id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <article className="testimonial">
              <div className="client--avatar">
                <img loading="lazy" src={avatar} alt={name} />
              </div>
              <h5 className="client--name">{name}</h5>
              <small className="client--review">{review}</small>
            </article>
          </div>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}

// const renderedTestimonials = data.map(({ avatar, name, review }, i) => {
//     return (
//       <article key={i} className="testimonial">
//         <div className="client--avatar">
//           <img src={avatar} alt={name} />
//         </div>
//         <h5 className="client--name">{name}</h5>
//         <small className="client--review">{review}</small>
//       </article>
//     );
//   });
