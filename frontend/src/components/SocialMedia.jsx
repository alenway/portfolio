import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/alenway">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/narendra-samtani-7b2694279/">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/narendra_samtani/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
