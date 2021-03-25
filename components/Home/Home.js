import React, { useRef } from 'react';
import SocialMediaContainer from '../SocialMediaContainer';

const Home = () => {
  const homeEl = useRef(null);

  return (
    <div ref={homeEl} className="home">
      <h1 className="title">Elijah Gaytan</h1>
      <h6 className="sub-title">Full-Stack Engineer | Linux Nerd</h6>
      <SocialMediaContainer />
    </div>
  );
};

export default Home;
