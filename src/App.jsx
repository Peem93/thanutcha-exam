import { useState } from 'react'
import React, { useState } from 'react';

function WeightTracker() {
  // Declare a state variable named 'weight' with an initial value of 0
  // 'setWeight' is the function used to update the 'weight' state
  const [weight, setWeight] = useState(0); 

  const handleWeightChange = (event) => {
    // Update the 'weight' state with the new value from the input field
    setWeight(event.target.value); 
  };

  return (
    <div>
      <label htmlFor="weight-input">Enter Weight (kg):</label>
      <input
        id="weight-input"
        type="number"
        value={weight} // The input's value is controlled by the 'weight' state
        onChange={handleWeightChange} // Call handleWeightChange when the input changes
      />
      <p>Current Weight: {weight} kg</p>
    </div>
  );
}

export default WeightTracker;