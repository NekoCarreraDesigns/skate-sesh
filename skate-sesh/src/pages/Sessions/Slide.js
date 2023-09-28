import React, { useState } from "react";
import "./Sessions.css";
import Trick from "../../components/trick/Trick";
import Header from "../../components/header/Header";
import TrickNav from "../../components/TrickNav";
import RotationDirection from "../../components/rotationDirection/RotationDirection";

const Slides = () => {
  const options = ["normal", "nollie", "switch", "fakie"];
  // const initialSelectedOptions = Array(options.length).fill(options[0]);

  // Initialize an array to track completion percentages for each exercise
  const initialCompletionPercentages = Array(options.length).fill(0);

  // const [selectedOption, setSelectedOption] = useState(initialSelectedOptions);
  const [completionPercentages, setCompletionPercentages] = useState(
    initialCompletionPercentages
  );

  // Function to update the completion percentage for a specific exercise
  const updateCompletionPercentage = (index, percentage) => {
    const newCompletionPercentages = [...completionPercentages];
    newCompletionPercentages[index] = percentage;
    setCompletionPercentages(newCompletionPercentages);
  };
  return (
    <>
      <Header />
      <TrickNav />
      <h1 className='trick-div-header'>Slide Tricks</h1>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='nose slide'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <RotationDirection />
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='tail slide'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <RotationDirection />
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='nose bluntslide'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <RotationDirection />
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='bluntslide'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <RotationDirection />
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='boardslide'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <RotationDirection />
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage: {completionPercentages[index]}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Dark Slide'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <RotationDirection />
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage: {completionPercentages[index]}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Casper Slide'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <RotationDirection />
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage: {completionPercentages[index]}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Primo Slide'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <RotationDirection />
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage: {completionPercentages[index]}%
          </p>
        ))}
      </div>
    </>
  );
};

export default Slides;
