import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Nav = () => {
  const [navBarOn, setNavBarOn] = useState(false);

  return (
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
          <div className={`navigation__bar`}></div>
        </>
      </CSSTransition>
    </div>
  );
};

export default Nav;
