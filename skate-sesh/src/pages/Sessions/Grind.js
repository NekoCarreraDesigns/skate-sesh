import React, { useState } from "react";
import "./Sessions.css";
import Trick from "../../components/trick/Trick";
import Header from "../../components/header/Header";
import TrickNav from "../../components/TrickNav";
import RotationDirection from "../../components/rotationDirection/RotationDirection";

const Grind = () => {
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
      <h1 className='trick-div-header'>Grind Tricks</h1>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='50-50'
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
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='5.0'
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
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='nose grind'
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
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='crooked grind'
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
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='grapefruit grind'
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
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='smith grind'
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
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='barley grind'
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
            trickName='bennet grind'
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
            trickName='suciu grind'
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
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='hurricane grind'
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
            trickName='sugarcane grind'
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
            trickName='salad grind'
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
            {option} Completion Percentage:{" "}
            {completionPercentages[index].toFixed(2)}%
          </p>
        ))}
      </div>
    </>
  );
};

export default Grind;
