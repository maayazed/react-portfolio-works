import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Works from './components/Works';

function App() {
  return (
    <div>
      <style>{`
      body {
        margin: 0px;
        padding: 0px;
        background-color: #748BAD;
        font-family: Arial, Helvetica, sans-serif;
      }
    `}</style>
      <Nav />
      <About />
      <Works />
    </div>
  );
}

export default App;