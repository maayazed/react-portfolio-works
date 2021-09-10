import React from 'react';
import '../styles/Works.css';

const styles = {
  overlayStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'normal',
    alignItems: 'center',
    color: '#ffffff'
  },
}

function Works() {
  return (
    <div>
      <h1 style={styles.overlayStyle} id='works'>Feature Works</h1>
      <nav className='header'>
        <ul className='ul'>
          <li>Collaborative</li>
          <li>Solo</li>
        </ul>
      </nav>
      <div>
        <h2>Collaborative</h2>
      </div>
    </div>
  );
}

export default Works;