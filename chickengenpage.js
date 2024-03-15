import React from 'react';
import ReactDOM from 'react-dom';
import ChickenGenerator from '/workspaces/chicken-head/components/chickengenerator.js'; // Import your ChickenGenerator component

// Define a React component to render the ChickenGenerator component
const App = () => {
  return (
    <div>
      {/* Your HTML input fields and button for user input */}
      <input type="text" id="top-text-input" />
      <input type="text" id="bottom-text-input" />
      <input type="number" id="text-size-top-input" />
      <input type="number" id="text-size-bottom-input" />
      <button id="generate-button">Generate Meme</button>
      {/* Render the ChickenGenerator component */}
      <ChickenGenerator />
    </div>
  );
};

// Render the App component into the root element of your HTML file
ReactDOM.render(<App />, document.getElementById('root'));
