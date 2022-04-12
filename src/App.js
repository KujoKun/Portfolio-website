import React from "react";
import Header from "./Comonents/Header";
import Nav from "./Comonents/Nav";
import About from "./Comonents/About";
import Experience from "./Comonents/Experience";
import Services from "./Comonents/Services";
import Portfolio from "./Comonents/Portfolio";
import Testimonials from "./Comonents/Testimonials";
import Contact from "./Comonents/Contact";
import Footer from "./Comonents/Footer";
// import "./index.css"
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
