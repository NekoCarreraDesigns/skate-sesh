import React from "react";
import "./TrickNav.css";

const TrickNav = () => {
  return (
    <>
      <nav className='trick-nav'>
        <a href='/sessions'>Flip Tricks</a>
        <br />
        <a href='/sessions/grind-tricks'>Grind Tricks</a>
        <br />
        <a href='/sessions/slide-tricks'>Slide Tricks</a>
        <br />
        <a href='/sessions/manual-tricks'>Manual Tricks</a>
        <br />
        <a href='/sessions/rotation-tricks'>Rotation Tricks</a>
        <br />
        <a href='/sessions/grab-tricks'>Grab Tricks</a>
        <br />
        <a href='/sessions/vert-tricks'>Vert Tricks</a>
        <br />
        <a href='/sessions/freestyle-tricks'>freestyle Tricks</a>
      </nav>
    </>
  );
};

export default TrickNav;
