import React from "react";

// Add styles to the tabs
function AboutMe() {
  return (
    <section id="aboutme">
      <div className="avatar">
        <div className="w-20 rounded">
          <img src="/img/user.jpg" />
        </div>
        <p>
          Hello, I'm a Computer Science Student who dabbles in all sorts of
          development projects! I tend to work on programming any types of
          programs that intrigue me. These range from the development of games,
          websites, applications, and various other programs. I enjoy the
          creativity, problem solving, and analytical aspects the most when it
          comes to developing projects.
        </p>
      </div>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Skills"
        />
        <div role="tabpanel" className="tab-content p-10">
          <ul>
            <li>
              <span>Visual Studio & Visual Studio Code</span>
              <br></br>Code Development Environments
            </li>
            <li>
              <span>C#, Python, Java, & Assembly</span>
              <br></br>Software Development Projects
            </li>
            <li>
              <span>HTML, CSS, JavaScript, Spotify API</span>
              <br></br>Web Development Projects
            </li>
            <li>
              <span>PowerBI & MatLab</span>
              <br></br>Data Analysis
            </li>
            <li>
              <span>Unity Hub</span>
              <br></br>Development of 2D & 3D Games
            </li>
            <li>
              <span>Aseprite</span>
              <br></br>Creation of Art for My Projects
            </li>
          </ul>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Projects"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          <ul>
            <li>
              <span> May 2024 - Current</span>
              <br></br>Quiz Tunes
            </li>
            <li>
              <span> January 2023 - Current</span>
              <br></br>Portfolio Website
            </li>
            <li>
              <span> September - December 2023</span>
              <br></br>Retro Rocketeers Game
            </li>
            <li>
              <span> July 2023</span>
              <br></br>Mission Demo Game
            </li>
            <li>
              <span> April - July 2023</span>
              <br></br>Dino Rhythm Game
            </li>
          </ul>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Education"
        />
        <div role="tabpanel" className="tab-content p-10">
          <ul>
            <li>
              <span>2019 - Current</span>
              <br></br>Bachelors in Computer Science
              <br></br> w/ Concentration in Gaming & Simulation
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
