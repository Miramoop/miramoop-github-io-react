import React from "react";

function AboutMe() {
  return (
    <section id="aboutme">
      <div className="about-col-1">
        <img src="/img/self.jpg" alt="Miranda (aka Miramoop)" />
      </div>

      <div className="about-col-2">
        <div className="aboutmebio">
          <h1>About Me</h1>
          <p>
            I dabble in all sorts of development projects! I am intruiged by
            learning new tech stacks & keeping up to date in the tech world. I
            have developed games, websites, applications, & various other
            programs. I enjoy the creativity, problem solving, & analytical
            aspects the most when it comes to project development.
          </p>
        </div>
        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="IDES / Tools"
            defaultChecked
          />

          <div role="tabpanel" className="tab-content">
            <ul>
              <li>
                <span>Visual Studio / Visual Studio Code</span>
              </li>
              <li>
                <span>Azure Services (Azure DevOps, Azure OpenAI, etc)</span>
              </li>
              <li>
                <span>Jupyter Notebooks</span>
              </li>
              <li>
                <span>Godot Engine</span>
              </li>
              <li>
                <span>Unity Hub</span>
              </li>
              <li>
                <span>Aseprite</span>
              </li>
              <li>
                <span>PowerBI</span>
              </li>
              <li>
                <span>GitHub</span>
              </li>
              <li>
                <span>Matlab</span>
              </li>
            </ul>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Languages"
          />
          <div role="tabpanel" className="tab-content">
            <ul>
              <li>
                <span>C#</span>
              </li>
              <li>
                <span>Python</span>
              </li>
              <li>
                <span>Java</span>
              </li>
              <li>
                <span>Assembly</span>
              </li>
              <li>
                <span>HTML</span>
              </li>
              <li>
                <span>CSS</span>
              </li>
              <li>
                <span>SASS</span>
              </li>
              <li>
                <span>JavaScript</span>
              </li>
              <li>
                <span>React</span>
              </li>
            </ul>
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="APIs"
          />
          <div role="tabpanel" className="tab-content">
            <ul>
              <li>
                <span>Spotify API</span>
              </li>
              <li>
                <span>YouTube API</span>
              </li>
              <li>
                <span>Discord API</span>
              </li>
              <li>
                <span>OpenAI API</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
