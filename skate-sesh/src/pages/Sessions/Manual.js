import React, { useState } from "react";
import "./Sessions.css";
import Trick from "../../components/trick/Trick";
import Header from "../../components/header/Header";
import TrickNav from "../../components/TrickNav";

const Manuals = () => {
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
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='nose manual'
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
            trickName='tail manual'
            options={option}
            initialTotalTried={0}
            initialTotalLanded={0}
            onCompletionPercentageChange={(percentage) =>
              updateCompletionPercentage(index, percentage)
            }
          />
        ))}
      </div>
    </>
  );
};

export default Manuals;
