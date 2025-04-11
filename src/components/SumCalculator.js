import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const calculateSum = async () => {
      const total = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(numbers.reduce((acc, num) => acc + num, 0));
        }, 0);
      });
      setSum(total);
    };

    calculateSum();
  }, [numbers]);

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleAddNumber = () => {
    const parsed = parseInt(currentInput, 10);
    if (!isNaN(parsed)) {
      setNumbers((prev) => [...prev, parsed]);
      setCurrentInput("");
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={currentInput}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={handleAddNumber}>Add</button>
      <p>Sum: {sum}</p>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>Number {index + 1}: {num}</li>
        ))}
      </ul>
    </div>
  );
};

export default SumCalculator;
