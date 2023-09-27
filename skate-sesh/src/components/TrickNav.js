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
      </nav>
    </>
  );
};

export default TrickNav;
