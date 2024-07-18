import React from "react";

//Add Styles

function Experience() {
  return (
    <section id="experience">
      <div className="flex flex-wrap gap-6">
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">C#, Python, Assembly</h2>
            <p>Software & Game Development</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">HTML, CSS, & Javascript</h2>
            <p>Web Development, such as the Current Website & Quiz Tunes</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Spotify & YouTube API</h2>
            <p>Web Development of Quiz Tunes</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">MatLab</h2>
            <p>Basic Shape Transformations & Puzzle Projects</p>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Aseprite & Unity Hub</h2>
            <p>Art Creation & Game Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
