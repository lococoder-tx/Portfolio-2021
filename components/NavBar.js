import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";

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
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/projects">
                <li>Projects</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </>
        </CSSTransition>
      </div>
      {children}
    </>
  );
};

export default NavBar;
