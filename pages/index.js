import React, { useRef } from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home/Home';
import About from '../components/About/About';

const index = () => {
  return (
    <>
      <NavBar>
        <div className="container bg">
          <Home></Home>
          <About></About>
        </div>
      </NavBar>
    </>
  );
};

export default index;
