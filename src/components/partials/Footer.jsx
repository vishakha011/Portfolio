import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaLaptopCode } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer_logo">
          <a href="/"><h2 className="logo"> Vishakha</h2></a>
        </div>
        <div className="social-media">
          <h4 className="follow">Follow Me</h4>
          <div className="social-media-icons flex-center">
            <a
              title="CodeWars"
              className="link_icon mx-2"
              href="https://www.codewars.com/users/vishakha011"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLaptopCode />
            </a>
            <a
              title="Twitter"
              className="link_icon mx-2"
              href="https://twitter.com/VKhatade"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaTwitter />
            </a>
            <a
              title="GitHub"
              className="link_icon mx-2"
              href="https://github.com/vishakha011"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              title="LinkedIn"
              className="link_icon mx-2"
              href="https://www.linkedin.com/in/vishakhakhatade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
