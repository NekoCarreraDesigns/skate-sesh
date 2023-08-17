import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <p className='home-page-paragraph'>
        Welcome to Skate Sesh, a skateboarding app to keep track of your skate
        sessions, as well as keeping track of your progression as a skater. Plus
        trick tips for those that are having a hard time or want to learn new
        tricks.
      </p>
      <img
        src='https://images.unsplash.com/photo-1544364493-4ff9efeabce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
        alt='skater'></img>
      <img
        src='https://images.unsplash.com/photo-1507738471757-ab1675ad2a89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
        alt='skater'></img>
      <img
        src='https://images.unsplash.com/photo-1573691138222-741a6db847d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHNrYXRlYm9hcmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
        alt='skater'></img>
      <p className='home-page-paragraph'>
        Are you ready to be the best skater you can be! All types of skating is
        encouraged and celebrated here. That's right you will find no hate for
        freestyle, or Vert. We all like to skate. So hit that button and let's
        rip!
      </p>
      <div className='button-div'>
        <button className='home-button' href='/main'>
          Let's Rip!
        </button>
      </div>
    </>
  );
};

export default Home;
