import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <section id="hero">
      <div
        className="hero"
        style={{
          minHeight: "75vh",
          backgroundImage: `url('/img/backgrounds/background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">CompSci Student</h1>
            <p className="mb-5"> Hi, I'm Miranda</p>
            <nav>
              <div className="grid grid-flow-col gap-4 social-links">
                <a
                  href="https://github.com/Miramoop"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Page"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mirandamorris845/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Page"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  href="https://miramoop.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Itch.io Page"
                >
                  <FontAwesomeIcon icon={faItchIo} size="2x" />
                </a>
                <a href="mailto:juniperistic@gmail.com" aria-label="Email Link">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;

{
  /* <div class="header-text" onclick="openmenu()">
<p>Compsci Student</p>
<h1>Hi, I'm <span>Miranda</span></h1>
</div>

<div class="social-icons">
<a href="https://www.linkedin.com/in/mirandamorris845/" target="_blank" rel="noopener" rel="noreferrer"><i class="ri-linkedin-box-fill"></i></a>
<a href="https://github.com/Miramoop" target="_blank" rel="noopener" rel="noreferrer"><i class="ri-github-fill"></i></a>
<a href="https://miramoop.itch.io/" target="_blank" rel="noopener" rel="noreferrer"><i class="ri-gamepad-line"></i></a>
<a href="mailto:juniperistic@gmail.com"><i class="ri-mail-line"></i></a>
</div> */
}
