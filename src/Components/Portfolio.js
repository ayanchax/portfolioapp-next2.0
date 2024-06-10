import React from "react";
import "./Portfolio.css";
const Portfolio = ({ data }) => {
  if (data) {
    var github = data.github;
    var linkedIn = data.linkedIn;
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/thumbnail/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
    var projectsDownload = data.projectsDownload;
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check out some of my recent works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
          <p className="portfolio-footer">
            <i className="fa fa-github"></i>
            &nbsp;&nbsp;
            <i className="fa fa-linkedin"></i>
            &nbsp;To know more about my work and projects, follow me on{" "}
            <a href={github}>Github</a> &amp; <a href={linkedIn}>LinkedIn</a>
          </p>
          <div className="portfolio-download-projects">
            <a
              title="Download"
              rel="noreferrer"
              target="_blank"
              href={projectsDownload}
              className="button"
            >
              <i className="fa fa-download"></i>&nbsp;&nbsp; Download Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
