import React from "react";
import "./Testimonials.css";
import AVATAR1 from "./../assets/avatar1.jpg";
import AVATAR2 from "./../assets/avatar2.jpg";
import AVATAR3 from "./../assets/avatar3.jpg";
// import AVATAR4 from "./../assets/avatar4.jpg";
import Slider from "./Slider/Slider";
const data = [
  {
    avatar: AVATAR1,
    name: "Remco Van Straaten",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, repellendus. Amet quos molestiae, labore, assumenda deleniti atque, asperiores suscipit laudantium fugit nihil reprehenderit? Sit possimus, fugiat officia temporibus at placeat!",
    id: 1,
  },
  {
    avatar: AVATAR2,
    name: "Aliona",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, repellendus. Amet quos molestiae, labore, assumenda deleniti atque, asperiores suscipit laudantium fugit nihil reprehenderit? Sit possimus, fugiat officia temporibus at placeat!",
    id: 2,
  },
  {
    avatar: AVATAR3,
    name: "Cole",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, repellendus. Amet quos molestiae, labore, assumenda deleniti atque, asperiores suscipit laudantium fugit nihil reprehenderit? Sit possimus, fugiat officia temporibus at placeat!",
    id: 3,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Slider testimonialData={data} />
    </section>
  );
};

export default Testimonials;
