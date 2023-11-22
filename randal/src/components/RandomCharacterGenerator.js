import React, { useState } from 'react';

const RandomCharacterGenerator = ({ onGenerateCharacter }) => {
  const [randomCharacter, setRandomCharacter] = useState('');

  const generateRandomCharacter = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomChar = characters.charAt(randomIndex);
    setRandomCharacter(randomChar);

    // Call the callback function with the generated character
    if (onGenerateCharacter) {
      onGenerateCharacter(randomChar);
    }
  };

  return (
    <div>
      <h1>Random Character Generator</h1>
      <p>Generated Character: {randomCharacter}</p>
      <button onClick={generateRandomCharacter}>Generate Random Character</button>
    </div>
  );
};

export default RandomCharacterGenerator;