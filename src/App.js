import React from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <style>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
      <Nav />
      <About />
    </div>
  );
}

export default App;