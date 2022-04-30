import React from "react";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Experience from "./component/expérience/Experience";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Nav from "./component/nav/Nav";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
