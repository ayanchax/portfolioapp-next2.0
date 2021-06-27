import React from "react";
import Parse from "html-react-parser";
import ContactCard from "./ContactCard";
import "./About.css"

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/avatar/" + data.image;
    var bio = Parse(data.bio);
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">

          <img
            className="profile-pic"
            src={profilepic}
            alt="Swaroop's Profile Avatar"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <ContactCard headerClass="" contactText="Contact Details" contactName={name} street={street} city={city} state={state} zip={zip} phone={phone}
                contactEmail={email} />
            </div>
            <div className="columns download">
              <p>
                <a title="Download" rel="noreferrer" target="_blank" href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
