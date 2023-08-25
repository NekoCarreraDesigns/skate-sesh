import { React, useState, useEffect } from "react";
import "./Sessions.css";
import Header from "../../components/header/Header";

const Sessions = () => {
  const options = ["normal", "nollie", "switch", "fakie"];
  const initialSelectedOptions = Array(options.length).fill(options[0]);
  const [selectedOption, setSelectedOption] = useState(initialSelectedOptions);
  const [completedTricks, setTotalCompletedTricks] = useState(0);
  const [totalTriedTricks, setTotalTriedTricks] = useState(0);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    const savedCompletionPercentage = localStorage.getItem(
      "completionPercentage"
    );
    if (savedCompletionPercentage) {
      setCompletionPercentage(parseFloat(savedCompletionPercentage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("completionPercentage", completionPercentage);
    console.log(completionPercentage);
  }, [completionPercentage]);

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

    const newCompletionPercentage =
      totalTried === 0 ? 0 : (totalLanded / totalTried) * 100;

    setCompletionPercentage(newCompletionPercentage);
    // setTotalTriedTricks(totalTried);
    // setTotalCompletedTricks(totalLanded);
    setCompletionPercentage(calculateCompletionPercentage());
  };

  const saveToDashboard = () => {
    alert(`Completion percentage saved ${completionPercentage}%`);
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
            placeholder='how many kickflips did you do?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalTriedTricks(newValue);
            }}></input>
          <input
            id='totalLandedInput'
            className='trick-input'
            placeholder='how many did you land?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalCompletedTricks(newValue);
            }}></input>
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
          <button onClick={saveToDashboard}>Save</button>
          <p className='trick-div-paragraph'>
            Total Completed Tricks: {completedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Total Tried Tricks: {totalTriedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Completion Percentage: {completionPercentage}%
          </p>
          <input
            className='trick-input'
            placeholder='how many heelflips did you do?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalTriedTricks(newValue);
            }}></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalCompletedTricks(newValue);
            }}></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[1])}
            onChange={(event) => handleOptionChange(event, 1)}
          />
          <p className='trick-div-paragraph'>{selectedOption[1]}</p>
          <button onClick={handleCalculateClick}>Calculate</button>
          <button onClick={saveToDashboard}>Save</button>
          <p className='trick-div-paragraph'>
            Total Completed Tricks: {completedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Total Tried Tricks: {totalTriedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Completion Percentage: {completionPercentage}%
          </p>
          <input
            className='trick-input'
            placeholder='how many shuvit flips did you do?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalTriedTricks(newValue);
            }}></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalCompletedTricks(newValue);
            }}></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[2])}
            onChange={(event) => handleOptionChange(event, 2)}
          />
          <p className='trick-div-paragraph'>{selectedOption[2]}</p>
          <button onClick={handleCalculateClick}>Calculate</button>
          <button onClick={saveToDashboard}>Save</button>
          <p className='trick-div-paragraph'>
            Total Completed Tricks: {completedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Total Tried Tricks: {totalTriedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Completion Percentage: {completionPercentage}%
          </p>
          <input
            className='trick-input'
            placeholder='how many hardflips did you do?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalTriedTricks(newValue);
            }}></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalCompletedTricks(newValue);
            }}></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[3])}
            onChange={(event) => handleOptionChange(event, 3)}
          />
          <p className='trick-div-paragraph'>{selectedOption[3]}</p>
          <button onClick={handleCalculateClick}>Calculate</button>
          <button onClick={saveToDashboard}>Save</button>
          <p className='trick-div-paragraph'>
            Total Completed Tricks: {completedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Total Tried Tricks: {totalTriedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Completion Percentage: {completionPercentage}%
          </p>
        </div>
      </div>
      <div className='trick-div-container'>
        <div className='trick-div-box'>
          <input
            className='trick-input'
            placeholder='how many shuvit heelflips did you do?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalTriedTricks(newValue);
            }}></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalCompletedTricks(newValue);
            }}></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[4])}
            onChange={(event) => handleOptionChange(event, 4)}
          />
          <p className='trick-div-paragraph'>{selectedOption[4]}</p>
          <button onClick={handleCalculateClick}>Calculate</button>
          <button onClick={saveToDashboard}>Save</button>
          <p className='trick-div-paragraph'>
            Total Completed Tricks: {completedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Total Tried Tricks: {totalTriedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Completion Percentage: {completionPercentage}%
          </p>
          <input
            className='trick-input'
            placeholder='how many shuvits did you do?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalTriedTricks(newValue);
            }}></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalCompletedTricks(newValue);
            }}></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[5])}
            onChange={(event) => handleOptionChange(event, 5)}
          />
          <p className='trick-div-paragraph'>{selectedOption[5]}</p>
          <button onClick={handleCalculateClick}>Calculate</button>
          <button onClick={saveToDashboard}>Save</button>
          <p className='trick-div-paragraph'>
            Total Completed Tricks: {completedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Total Tried Tricks: {totalTriedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Completion Percentage: {completionPercentage}%
          </p>
          <input
            className='trick-input'
            placeholder='how many tre flips did you do?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalTriedTricks(newValue);
            }}></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalCompletedTricks(newValue);
            }}></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[6])}
            onChange={(event) => handleOptionChange(event, 6)}
          />
          <p className='trick-div-paragraph'>{selectedOption[6]}</p>
          <button onClick={handleCalculateClick}>Calculate</button>
          <button onClick={saveToDashboard}>Save</button>
          <p className='trick-div-paragraph'>
            Total Completed Tricks: {completedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Total Tried Tricks: {totalTriedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Completion Percentage: {completionPercentage}%
          </p>
          <input
            className='trick-input'
            placeholder='how many laser flips did you do?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalTriedTricks(newValue);
            }}></input>
          <input
            className='trick-input'
            placeholder='how many did you land?'
            onChange={(event) => {
              const newValue =
                event.target.value.trim() === ""
                  ? 0
                  : parseInt(event.target.value, 10);
              setTotalCompletedTricks(newValue);
            }}></input>
          <h4 className='trick-div-header'>What stance were they in?</h4>
          <input
            type='range'
            min={0}
            max={3}
            value={options.indexOf(selectedOption[7])}
            onChange={(event) => handleOptionChange(event, 7)}
          />
          <p className='trick-div-paragraph'>{selectedOption[7]}</p>
          <button onClick={handleCalculateClick}>Calculate</button>
          <button onClick={saveToDashboard}>Save</button>
          <p className='trick-div-paragraph'>
            Total Completed Tricks: {completedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Total Tried Tricks: {totalTriedTricks}
          </p>
          <p className='trick-div-paragraph'>
            Completion Percentage: {completionPercentage}%
          </p>
        </div>
      </div>
      <div className='trick-div-container'>
        <div className='trick-div-box'></div>
      </div>
    </>
  );
};

export default Sessions;
