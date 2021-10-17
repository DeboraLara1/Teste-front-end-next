import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import Routes from './Routes';

import history from './history';
import { AuthPrivider } from './context/authContext';

function App() {
  return (
    <>
      <AuthPrivider>
        <Router history={history}>
          <Routes />
        </Router>
      </AuthPrivider>
    </>
  );
}

export default App;
