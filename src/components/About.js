import React from 'react';
import '../styles/About.css';
import Background from '../img/intro.png';

const styles = {
  overlayStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'normal',
    alignItems: 'center',
    backgroundColor: '#333333be',
    color: '#ffffff'
  },
  overlayContentStyle: {
    position: 'static',
    display: 'flex',
    left: 'auto',
    marginTop: '1px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex - start',
    textAlign: 'center',
  },
};

function About() {
  return (
    <div style={styles.overlayStyle} className='section'>
      <div style={styles.overlayContentStyle}>
        <h1>Portfolio</h1>
        <p><a href='https://maayazed.github.io/prework-about-me/'><img src={Background} alt='About section img' /></a></p>
      </div>
    </div>
  );
}

export default About;