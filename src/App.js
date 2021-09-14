import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Works from './components/Works';
import Form from './components/Form';

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
        <Route exact path='/email-form'
          render={(routerProps) => < Form routerProps={routerProps} />}>
          <Form />
        </Route>
        <About />
        <Works />
      </div>
    </Router>
  );
}

export default App;