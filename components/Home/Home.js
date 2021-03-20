import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const homeEl = useRef(null);

  return (
    <div ref={homeEl} className="home">
      <h1 className="title">Elijah Gaytan</h1>
      <h6 className="sub-title">Full-Stack Engineer | Linux Nerd</h6>
      <ul className="social_media_container">
        <li>
          <a href="https://github.com/chaleay">
            <FontAwesomeIcon icon={faGithub} size="1x"></FontAwesomeIcon>
          </a>
          <p>Github</p>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/elijahcgaytan/">
            <FontAwesomeIcon icon={faLinkedinIn} size="1x"></FontAwesomeIcon>
          </a>
          <p className="modified-pos">LinkedIn</p>
        </li>
        <li>
          <a href="https://twitter.com/chaleayyy">
            <FontAwesomeIcon icon={faTwitter} size="1x"></FontAwesomeIcon>
          </a>
          <p>Twitter</p>
        </li>
        <li>
          <a href="https://soundcloud.com/user-799359265">
            <FontAwesomeIcon icon={faSoundcloud} size="1x"></FontAwesomeIcon>
          </a>
          <p className="modified-pos">Soundcloud</p>
        </li>
        <li>
          <a href="resume.pdf">
            <FontAwesomeIcon icon={faFile} size="1x"></FontAwesomeIcon>
          </a>
          <p className="modified-pos">Resume</p>
        </li>
      </ul>
    </div>
  );
};

export default Home;
