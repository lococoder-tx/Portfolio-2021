import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const ContactMediaContainer = () => {
  return (
    <ul className="contact_container">
      <li>
        <a href="https://www.linkedin.com/in/elijahcgaytan/">
          <FontAwesomeIcon icon={faLinkedin} size="1x"></FontAwesomeIcon>
        </a>
        <span className="modified-pos">Message on LinkedIn</span>
      </li>
      <li>
        <a href="mailto:contact@lococoder.com">
          <FontAwesomeIcon icon={faEnvelopeSquare} size="1x"></FontAwesomeIcon>
        </a>
        <span>contact@lococoder.com</span>
      </li>
    </ul>
  );
};

export default ContactMediaContainer;
