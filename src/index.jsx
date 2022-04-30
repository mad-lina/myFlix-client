import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class myFlixApplication extends React.Component {
  render() {
    return (
      <div className="my-Flix">
        <div>Good Morning</div>
      </div>
    );
  }
}

//Finds the root of the app
const container = documents.getElementById('app-container');

// Tells React to render your app in the root DOM element
createRoot(container).render(React.createElement(MyFlixApplication));