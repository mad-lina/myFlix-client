import React from 'react';
import ReactDOM from 'react-dom';

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
const container = documents.getElementByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);