import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';

import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class myFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <MainView />
      </Container>
    );
  }
}

//Finds the root of the app
const container = document.getElementById('app-container');

// Tells React to render your app in the root DOM element
createRoot(container).render(React.createElement(myFlixApplication));