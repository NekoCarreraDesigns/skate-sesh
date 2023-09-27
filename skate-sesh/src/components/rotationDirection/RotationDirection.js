import { React, useState } from "react";
import "./RotationDirection.css";

const RotationDirection = () => {
  const [isFrontside, setIsFrontside] = useState(false);
  const [isBackside, setIsBackside] = useState(false);

  const handleFrontsideChange = () => {
    setIsFrontside(!isFrontside);
    if (!isFrontside && isBackside) {
      setIsBackside(false);
    }
  };

  const handleBacksideChange = () => {
    setIsBackside(!isBackside);
    if (!isBackside && isFrontside) {
      setIsFrontside(false);
    }
  };

  return (
    <>
      <div className='checkbox-group'>
        <div className='checkbox-item'>
          <label>Backside:</label>
          <input
            type='checkbox'
            checked={isBackside}
            onChange={handleBacksideChange}
          />
        </div>
        <div className='checkbox-item'>
          <label>Frontside:</label>
          <input
            type='checkbox'
            checked={isFrontside}
            onChange={handleFrontsideChange}
          />
        </div>
      </div>
      {isBackside && isFrontside && (
        <p className='warning'>Please select only one rotation type.</p>
      )}
      <p>
        Direction:{" "}
        {isBackside ? "Backside" : isFrontside ? "Frontside" : "None"}
      </p>
    </>
  );
};

export default RotationDirection;
