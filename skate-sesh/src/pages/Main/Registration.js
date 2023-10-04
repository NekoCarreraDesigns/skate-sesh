import React from "react";
import "./Main.css";

const Registration = () => {
  return (
    <>
      <div className='form-div'>
        <p className='intro-paragraph'>
          Please sign up to use the skate sesh app
        </p>
        <br />
        <input
          className='username'
          label='first-name'
          placeholder='please enter your first name'></input>
        <br />
        <br />
        <input
          className='username'
          label='username'
          placeholder='please enter a username'></input>
        <br />
        <br />
        <input
          className='password'
          type='password'
          label='password'
          placeholder='please type in a password'></input>
        <br />
        <br />
        <button className='sign-up-button'>Sign Up</button>
      </div>
    </>
  );
};

export default Registration;
