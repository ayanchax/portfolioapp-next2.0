import React from "react";
import "./Career.css";

const Career = ({ data }) => {
  if (data) {

    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3
            title={education.shortTitle}
            className="resume-school-name"
            onClick={() => window.open(`${education.url}`)}
          >
            {education.school}
          </h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.filter((w) => w.show).map(function (work) {
      return (
        <div key={work.company}>
          <div className="work-company">
            <h3>{work.company}</h3>
            <img
              title={`Visit ${work.shortName}`}
              onClick={() => window.open(`${work.url}`)}
              className="company-logo"
              alt="Company Logo"
              src={`images${work.logo}`}
            />

            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>

            {work.otherHeldRoles != null && (
              <div>
                <small
                  style={{ fontSize: "1.4rem", textDecoration: "underline" }}
                >
                  <i className="fa fa-tags"></i>Previously Held Roles
                  <br />{" "}
                </small>
                <strong style={{ fontSize: "1.2rem" }}>
                  {work.otherHeldRoles}.
                </strong>
                <br />
              </div>
            )}
          </div>

          <p>{work.description}</p>

          <hr />
        </div>
      );
    });


    var techStack = data.technologyStack.map(function (tech) {
      return (
        <div key={tech.name} className="tech-container">
          <img
            className="tech-image"
            alt={tech.name}
            src={`images${tech.url}`}
          />
          {/* <div className="tech-title">{tech.name}</div> */}
        </div>
      );
    });

  }

  return (
    <section id="career">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="tech-stack" >
          {techStack}
        </div>
      </div>
    </section>
  );
};

export default Career;
