import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMusic,
  faSquarePollVertical,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { faUnity } from "@fortawesome/free-brands-svg-icons";

function Experience() {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faCode} size="1x" />
              <br></br>
              C#, Python, Assembly
            </h2>
            <p>Software & Game Development</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faWindowRestore} size="1x" />
              HTML, CSS, & Javascript
            </h2>
            <p>Web Development, such as the Current Website & Quiz Tunes</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faMusic} size="1x" />
              Spotify & YouTube API
            </h2>
            <p>Web Development of Quiz Tunes</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faSquarePollVertical} size="1x" />
              MatLab
            </h2>
            <p>Basic Shape Transformations & Puzzle Projects</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faUnity} size="1x" />
              Aseprite & Unity Hub
            </h2>
            <p>Art Creation & Game Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
