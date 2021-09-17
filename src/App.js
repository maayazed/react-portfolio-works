import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Works from './components/Works';
import contactForm from './components/Form';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Route path='/email-form/' component={contactForm} />
        <About />
        <Works />
      </div>
    </Router>
  );
}

export default App;