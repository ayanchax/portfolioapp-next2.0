import React from "react";
import "./Footer.css"


const Footer = ({ data }) => {
  if (data) {
    var developerFooterCreditHREF = data.social[data.social.length - 3]?.url;
    // var website = data.website;
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
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li className="footer-copyright">
              Made with <i className="fa fa-heart footer-heart" ></i> by {" "}
              <a className="footer-credit" title="Ayan Chax" href={developerFooterCreditHREF ? developerFooterCreditHREF : "#"}>
                Ayan Chax
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
