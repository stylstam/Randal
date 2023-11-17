import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello, I am Randal. I create random passwords.
        </h1>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create password
        </a>
      </header>
      <body>
        <div id="root"></div>
        <script src="path-to-your-bundle.js"></script>
      </body>
    </div>
  );
}

export default App;