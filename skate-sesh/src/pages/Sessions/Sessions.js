import React, { useState } from "react";
import "./Sessions.css";
import Trick from "../../components/trick/Trick";
import Header from "../../components/header/Header";

const Sessions = () => {
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
      <nav className='trick-nav'>
        <a href='/sessions'>Flip Tricks</a>
        <br />
        <a href='/sessions/grind-tricks'>Grind Tricks</a>
        <br />
        <a href='/sessions/slide-tricks'>Slide Tricks</a>
      </nav>
      <h1 className='trick-div-header'>Flip Tricks</h1>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='kickflip'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='varial kickflip'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Hardflip'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='heelflip'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Inward heelflip'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='varial heelflip'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='treflips'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='laser flips'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
      {/* Display individual completion percentages */}
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <p key={index}>
            {option} Completion Percentage: {completionPercentages[index]}%
          </p>
        ))}
      </div>
    </>
  );
};

export default Sessions;
