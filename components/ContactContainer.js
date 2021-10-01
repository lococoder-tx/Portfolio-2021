import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faDiscord,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const ContactMediaContainer = () => {
  return (
    <ul className="contact_container">
      <li>
        <a href="https://www.linkedin.com/in/elijahcgaytan/">
          <FontAwesomeIcon icon={faLinkedin} size="1x"></FontAwesomeIcon>
        </a>
        <p className="modified-pos">DM on LinkedIn</p>
      </li>
      <li>
        <a href="mailto:elijahgaytan@protonmail.com">
          <FontAwesomeIcon icon={faEnvelopeSquare} size="1x"></FontAwesomeIcon>
        </a>
        <p>Email</p>
      </li>
    </ul>
  );
};

export default ContactMediaContainer;
