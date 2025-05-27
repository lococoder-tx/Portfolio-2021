import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const SocialMediaContainer = () => {
  return (
    <ul className="social_media_container">
      <li>
        <a href="https://github.com/lococoder-tx">
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
        <a href="resume.pdf">
          <FontAwesomeIcon icon={faFile} size="1x"></FontAwesomeIcon>
        </a>
        <p className="modified-pos">Resume</p>
      </li>
    </ul>
  )
}

export default SocialMediaContainer
