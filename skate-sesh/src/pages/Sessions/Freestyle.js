import React, { useState } from "react";
import "./Sessions.css";
import Trick from "../../components/trick/Trick";
import Header from "../../components/header/Header";
import TrickNav from "../../components/TrickNav";

const Freestyle = () => {
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
      <h1 className='trick-div-header'>Freestyle Tricks</h1>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='anti-casper'
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
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Casper'
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
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Primo'
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
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Godzilla Flip'
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
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Finger Flip'
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
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Tic-Tac'
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
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Space Walk'
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
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Walk the Dog'
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
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Truck Stand'
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
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Saran Wrap'
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
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Pogo'
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
          <p className='trick-paragraph' key={index}>
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
    </>
  );
};

export default Freestyle;
