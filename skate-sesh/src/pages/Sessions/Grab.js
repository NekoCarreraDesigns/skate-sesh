import React, { useState } from "react";
import "./Sessions.css";
import Trick from "../../components/trick/Trick";
import Header from "../../components/header/Header";
import TrickNav from "../../components/TrickNav";
import RotationDirection from "../../components/rotationDirection/RotationDirection";

const Grabs = () => {
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
      <h1 className='trick-div-header'>Grab Tricks</h1>
      <div className='trick-div-container'>
        {options.map((option, index) => (
          <Trick
            key={index}
            trickName='Nose Grab'
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
            trickName='Tail Grab'
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
            trickName='Indy Grab'
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
            trickName='Crail Grab'
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
            trickName='Weddle Grab'
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
            trickName='Japan Grab'
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
            trickName='Lien Grab'
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
            trickName='Method Grab'
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
            trickName='Melon Grab'
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
            trickName='Stalefish Grab'
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
            trickName='Taipan Grab'
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
            trickName='Roast Beef Grab'
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
            trickName='Chicken Salad Grab'
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
            trickName='Seatbelt Grab'
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

export default Grabs;
