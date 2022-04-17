import React from "react";
import Header from "./Comonents/Home-Page-Components/Header/Header.js";
import Nav from "./Comonents/Home-Page-Components/Nav/Nav.js";
import About from "./Comonents/Home-Page-Components/About/About.js";
import Experience from "./Comonents/Home-Page-Components/Experience/Experience.js";
import Services from "./Comonents/Home-Page-Components/Services/Services.js";
import Portfolio from "./Comonents/Home-Page-Components/Portfolio/Portfolio.js";
import Testimonials from "./Comonents/Home-Page-Components/Testimonials/Testimonials.js";
import Contact from "./Comonents/Home-Page-Components/Contact/Contact.js";
import Footer from "./Comonents/Home-Page-Components/Footer/Footer.js";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
