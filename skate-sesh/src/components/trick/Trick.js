import React, { useState } from "react";
import "./Trick.css";

const Trick = ({
  trickName,
  options,
  initialTotalTried,
  initialTotalLanded,
  onCompletionPercentageChange,
}) => {
  const [totalTriedTricks, setTotalTriedTricks] = useState(initialTotalTried);
  const [totalLandedTricks, setTotalLandedTricks] =
    useState(initialTotalLanded);

  const calculateCompletionPercentage = () => {
    if (totalTriedTricks === 0) {
      return 0;
    }
    return (totalLandedTricks / totalTriedTricks) * 100;
  };

  const handleCalculateClick = () => {
    // Calculate the completion percentage
    const completionPercentage = calculateCompletionPercentage();

    // Call the callback function provided by the parent component to update its state
    onCompletionPercentageChange(completionPercentage);
  };

  return (
    <div className='trick-div-box'>
      <h4 className='trick-div-header'>
        {" "}
        Trick Name: {options} {trickName}
      </h4>
      <label className='trick-label'>How many did you try?</label>
      <input
        className='trick-input'
        trickName={trickName}
        options={options}
        placeholder='how many did you try?'
        value={totalTriedTricks}
        onChange={(event) => {
          // Handle blank input as 0
          const newValue =
            event.target.value.trim() === ""
              ? 0
              : parseInt(event.target.value, 10);
          setTotalTriedTricks(newValue);
        }}
      />
      <br />
      <label className='trick-label'>How many did you land?</label>
      <input
        className='trick-input'
        placeholder='how many did you land?'
        value={totalLandedTricks}
        onChange={(event) => {
          // Handle blank input as 0
          const newValue =
            event.target.value.trim() === ""
              ? 0
              : parseInt(event.target.value, 10);
          setTotalLandedTricks(newValue);
        }}
      />

      <button onClick={handleCalculateClick}>Calculate</button>
      <p className='trick-paragraph'>
        Total Completed Tricks: {totalLandedTricks}
      </p>
      <p className='trick-paragraph'>Total Tried Tricks: {totalTriedTricks}</p>
      <p className='trick-paragraph'>
        Completion Percentage: {calculateCompletionPercentage()}%
      </p>
    </div>
  );
};

export default Trick;
