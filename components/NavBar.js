import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const NavBar = ({ children }) => {
  const [navBarOn, setNavBarOn] = useState(false);

  return (
    <>
      <div className="navigation">
        <div
          className="navigation__button"
          onClick={() => {
            setNavBarOn(!navBarOn);
          }}
        >
          <span className="navigation__icon"></span>
        </div>

        <CSSTransition classNames="fade" in={navBarOn} timeout={1000}>
          <>
            <ul className="navigation__bar navigation__text">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </>
        </CSSTransition>
      </div>
      <main>{children}</main>
    </>
  );
};

export default NavBar;
