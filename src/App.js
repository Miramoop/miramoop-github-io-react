import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      {/* <Portfolio />
      <Footer /> */}
    </div>
  );
}

export default App;
