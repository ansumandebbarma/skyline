import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const instagram = require("../../Assets/instagram.png");
  const github = require("../../Assets/github.png");
  const youtube = require("../../Assets/youtube.png");
  const twitter = require("../../Assets/twitter.png");

  return (
    <div className="footer">
      <section className="container">
        <div className="row">
          <div className="col-sm">
            <Link to="/about">About Skyline</Link> <br />
            <Link to="/about">News</Link> <br />
            <Link to="/about">Careers</Link> <br />
            <Link to="/about">Investors</Link> <br />
            <Link to="/about">Retern Centre</Link>
          </div>
          <div className="col-sm">
            <Link to="/contact">Contact Us</Link> <br />
            <Link to="/about">Help</Link> <br />
            <Link to="/about">Sustainability</Link> <br />
            <Link to="/about">Become a Member</Link> 
          </div>
          <div className="col-sm">
            <Link to="/policy">Privacy Policy</Link><br />
            <Link to="/developers">Developers</Link> <br />
            <Link to="/about">Press Releases</Link> <br />
            <Link to="/about">Send Us Feedback</Link> <br />
          </div>
          <div className="col-sm"></div>
          <div className="col-sm"></div>
          <div className="col-sm">
            <Link to="/instagram"><img src={instagram} alt="Instagram" /></Link>
            <Link to="/youtube"><img src={youtube} alt="YouTube" /></Link>
            <Link to="https://github.com/rajendrareang/skyline"><img src={github} alt="GitHub" /></Link>
            <Link to="/twitter"><img src={twitter} alt="twitter" /></Link>
          </div>
        </div>
      </section>
      <div className="footer-copyright">
        <br /> <br />
        &copy; {new Date().getFullYear()} Skyline Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
