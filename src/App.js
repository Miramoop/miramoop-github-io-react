import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";

// import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
