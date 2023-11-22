import React, { useState } from 'react';
import RandomCharacterGenerator from './RandomCharacterGenerator';

const TextBoxComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleGenerateCharacter = (character) => {
    console.log(`Generated character: ${character}`);
    // You can perform additional actions with the generated character here
  };

  return (
    <div>
      <input
        type="text"
        value={<RandomCharacterGenerator onGenerateCharacter={handleGenerateCharacter} />}
        onChange={handleInputChange}
        placeholder="Password appears here..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default TextBoxComponent;