import React from "react";

function Portfolio() {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src="/img/projects/project1.png" alt="project1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Portfolio Website</h2>
            <p>
              Discover all the fun and interactive projects developed by me! The
              original version was built with HTML, CSS, & JavaScript. The React
              version was built with React & additional features were added.
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Miramoop/miramoop.github.io"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Original
              </a>
              <a
                href="https://github.com/Miramoop/miramoop.github.io.react"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src="/img/projects/quiztuneslogo.png" alt="project2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Quiz Tunes</h2>
            <p>
              Quiz Tunes is a Web Quiz that recommends a Spotify & YouTube track
              based on your answers to the quiz! The Original version was
              developed with HTML, CSS, & JavaScript. The React version utilizes
              React, TailwindCSS, DaisyUI, SASS, etc.
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Miramoop/Quiz-Tunes"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Original
              </a>
              <a
                href="https://github.com/Miramoop/Quiz-Tunes-React"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src="/img/projects/dinorhythm.png" alt="project3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dino Rhythm Game</h2>
            <p>
              You're a dino on an adventure trying to collect all the correct
              notes!
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Miramoop/Dino-Rhythm-Game"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              <a
                href="https://miramoop.itch.io/dino-rhythm-game"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Itch.io Game
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src="/img/projects/missiondemo.png" alt="project4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mission Demo Game</h2>
            <p>
              An Angry Birds Clone where you must destroy all the castles to
              win!
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/Miramoop/Mission-Demolition"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              <a
                href="https://miramoop.itch.io/mission-demolition"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Itch.io Game
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
