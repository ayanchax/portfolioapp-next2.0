import React from "react";
import TypeWriter from "react-typewriter";
import Parse from "html-react-parser";


const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var short_description = Parse(data.short_description);
    var city = data.address.city;
    var nickName = data.preferredName;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
          </h1>
          <h3>
            <i style={{ color: "#EBEEEE" }}><i className="fa fa-user"></i> a.k.a</i>  <span style={{ color: "#F7AB0A" }}>{nickName}</span> | <span style={{ fontSize: "2.2rem" }}><i className="fa fa-briefcase"></i> {occupation}</span> | <span style={{ color: "#EBEEEE" }}><i className="fa fa-map-marker"></i> {city}</span>
          </h3>
          <h4 style={{ color: "#FFF5D8", fontWeight: "100" }}>
            <TypeWriter typing={0.5}>{short_description ? short_description : null}</TypeWriter>
          </h4>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header >
  );
};

export default Header;
