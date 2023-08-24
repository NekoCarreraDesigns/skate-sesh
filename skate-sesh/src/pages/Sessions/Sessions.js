import { React, useState } from "react";
import "./Sessions.css";
import Header from "../../components/header/Header";

const Sessions = () => {
  const options = ["normal", "nollie", "switch", "fakie"];
  const initialSelectedOptions = Array(options.length).fill(options[0]);
  const [selectedOption, setSelectedOption] = useState(initialSelectedOptions);
  const [completedTricks, setCompletedTricks] = useState(0);
  const [totalTriedTricks, setTotalTriedTricks] = useState(0);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const calculateCompletionPercentage = () => {
    if (totalTriedTricks === 0) {
      return 0;
    }
    return (completedTricks / totalTriedTricks) * 100;
  };

  const handleCalculateClick = (event) => {
    const totalTried = parseInt(
      document.getElementById("totalTriedInput").value,
      10
    );
    const totalLanded = parseInt(
      document.getElementById("totalLandedInput").value,
      10
    );
    setTotalTriedTricks(totalTried);
    setCompletedTricks(totalLanded);
    setCompletionPercentage(calculateCompletionPercentage());
  };

  const handleOptionChange = (event, index) => {
    const newSelectedOptions = [...selectedOption];
    newSelectedOptions[index] = options[event.target.value];
    setSelectedOption(newSelectedOptions);
  };

  return (
    <>
      <Header />
      <h1 className='trick-div-header'>Flip Tricks</h1>
      <div className='trick-div-container'>
        <div className='trick-div-box'>
          <input
            id='totalTriedInput'
            className='trick-input'
            placeholder='how many kickflips did you do?'></input>
          <input
            id='totalLandedInput'
            className='trick-input'
            placeholder='how many did you land?'></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[0])}
            onChange={(event) => handleOptionChange(event, 0)}
          />
          <p className='trick-div-paragraph'>{selectedOption[0]}</p>
          <button onClick={handleCalculateClick}>Calculate</button>
          <p>Total Completed Tricks: {completedTricks}</p>
          <p>Total Tried Tricks: {totalTriedTricks}</p>
          <p>Completion Percentage: {completionPercentage}%</p>
          <input
            className='trick-input'
            placeholder='how many heelflips did you do?'></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[1])}
            onChange={(event) => handleOptionChange(event, 1)}
          />
          <p className='trick-div-paragraph'>{selectedOption[1]}</p>
          <input
            className='trick-input'
            placeholder='how many shuvit flips did you do?'></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[2])}
            onChange={(event) => handleOptionChange(event, 2)}
          />
          <p className='trick-div-paragraph'>{selectedOption[2]}</p>
          <input
            className='trick-input'
            placeholder='how many hardflips did you do?'></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[3])}
            onChange={(event) => handleOptionChange(event, 3)}
          />
          <p className='trick-div-paragraph'>{selectedOption[3]}</p>
        </div>
      </div>
      <div className='trick-div-container'>
        <div className='trick-div-box'>
          <input
            className='trick-input'
            placeholder='how many shuvit heelflips did you do?'></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[4])}
            onChange={(event) => handleOptionChange(event, 4)}
          />
          <p className='trick-div-paragraph'>{selectedOption[4]}</p>
          <input
            className='trick-input'
            placeholder='how many shuvits did you do?'></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[5])}
            onChange={(event) => handleOptionChange(event, 5)}
          />
          <p className='trick-div-paragraph'>{selectedOption[5]}</p>
          <input
            className='trick-input'
            placeholder='how many tre flips did you do?'></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[6])}
            onChange={(event) => handleOptionChange(event, 6)}
          />
          <p className='trick-div-paragraph'>{selectedOption[6]}</p>
          <input
            className='trick-input'
            placeholder='how many laser flips did you do?'></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[7])}
            onChange={(event) => handleOptionChange(event, 7)}
          />
          <p className='trick-div-paragraph'>{selectedOption[7]}</p>
        </div>
      </div>
      <div className='trick-div-container'>
        <div className='trick-div-box'></div>
      </div>
    </>
  );
};

export default Sessions;
