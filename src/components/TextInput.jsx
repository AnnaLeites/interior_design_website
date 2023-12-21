// TextInput.js
import React, { useEffect, useState } from 'react';

function TextInput({ onChange, onSend }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const newInputValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setInputValue(newInputValue);
    onChange(newInputValue);
  };

  const handleButtonClick = () => {
    onSend(inputValue);
    setInputValue(''); // Optionally clear the input after sending
  };

  
  return (
    <div>
      <label>Enter free text :</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>OK</button>
    </div>
  );
}

export default TextInput;
