import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faItchIo,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer footer-center text-primary-content">
      <p className="connections">Connect with Me:</p>
      <div className="social-links">
        <a
          href="https://github.com/Miramoop"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Page"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/mirandamorris845/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Page"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://miramoop.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Itch.io Page"
        >
          <FontAwesomeIcon icon={faItchIo} size="2x" />
        </a>
        <a href="mailto:juniperistic@gmail.com" aria-label="Email Link">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <p className="copyright">
        Copyright © {new Date().getFullYear()} Miramoop Coding
      </p>
    </footer>
  );
}
export default Footer;
