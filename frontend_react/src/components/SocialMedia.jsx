import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/Arunraj003" target='_blank' rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/Arunraj003' target='_blank' rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia;
