import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Works from './components/Works';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import contactForm from './components/Form';

function App() {
  return (
    <Router>
      <div>
        <style>{`
      body {
        margin: 0px;
        padding: 0px;
        background-color: #6AACF8;
        font-family: Arial, Helvetica, sans-serif;
      }
    `}</style>
        <Nav />
        <Route exact path='/email-form/' component={contactForm} />
        <About />
        <Works />
      </div>
    </Router>
  );
}

export default App;