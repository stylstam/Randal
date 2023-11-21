import React, { useState } from 'react';

const TextBoxComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Password appears here..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default TextBoxComponent;