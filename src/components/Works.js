import React from 'react';
import '../styles/Works.css';

const styles = {
  overlayStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'normal',
    alignItems: 'center',
    color: '#070201',
  },
  flexRowStyle: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    justifyContent: 'space-evenly',
    textAlign: 'center'
  },
  flexColumnStyle: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    border: 'solid',
    borderColor: '#fff2f1',
  },
  gridRowStyle: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 2fr)',
  },
}

function Works() {
  return (
    <div>
      <h1 style={styles.overlayStyle} id='works'>Feature Works</h1>
      <nav className='header'>
        <ul className='ul'>
          <li><a href='#collab'>Collaborative</a></li>
          <li><a href='#solo'>Solo</a></li>
        </ul>
      </nav>
      <div className='body-section'>
        <h2 id='collab'>Collaborative</h2>
        <div style={styles.flexRowStyle} className='colorStyle'>
          <div style={styles.flexColumnStyle} className='colorStyle'>
            <h3>Stock Finder</h3>
            <p>A front end web application for searching company stocks with server-side API requests.</p>
            <div style={styles.gridRowStyle}>
              <h5><a href='https://arerickson28.github.io/stock-finder/' target="_blank" rel="noopener noreferrer">DEMO</a></h5>
              <h5><a href='https://github.com/maayazed/web-dev-project1' target="_blank" rel="noopener noreferrer">REPO</a></h5>
            </div>
          </div>
          {/*  */}
          <div style={styles.flexColumnStyle} className='colorStyle'>
            <h3>The Hat Trick Platform</h3>
            <p>A fullstack web application for documentation of hockey statistics utilizing the MVC paradigm.</p>
            <div style={styles.gridRowStyle}>
              <h5><a href='https://the-hattrick-platform.herokuapp.com/' target="_blank" rel="noopener noreferrer">DEMO</a></h5>
              <h5><a href='https://github.com/maayazed/Project_2_Purity_Ring' target="_blank" rel="noopener noreferrer">REPO</a></h5>
            </div>
          </div>
        </div>
        {/*  */}
        <h2 id='solo'>Solo</h2>
        <div style={styles.flexRowStyle} className='colorStyle'>
          <div style={styles.flexColumnStyle} className='colorStyle'>
            <h3>Note Taker</h3>
            <p>An express server orientated application for adding, removing, and editing notes.</p>
            <div style={styles.gridRowStyle}>
              <h5><a href='https://aqueous-headland-91098.herokuapp.com/' target="_blank" rel="noopener noreferrer">DEMO</a></h5>
              <h5><a href='https://github.com/maayazed/note-taker' target="_blank" rel="noopener noreferrer">REPO</a></h5>
            </div>
          </div>
          {/*  */}
          <div style={styles.flexColumnStyle} className='colorStyle'>
            <h3>Employee Tracker</h3>
            <p>An interface content management system tool intended for tracking company employees utilizing a MySQL database.</p>
            <h5><a href='https://github.com/maayazed/employee-tracker' target="_blank" rel="noopener noreferrer">REPO</a></h5>
          </div>
        </div>
        <br />
        {/*  */}
        <div style={styles.flexRowStyle} className='colorStyle'>
          <div style={styles.flexColumnStyle} className='colorStyle'>
            <h3>ORM-Commerce</h3>
            <p>An e-commerce backend model using object relational mapping programming used with Insomnia client API.</p>
            <h5><a href='https://github.com/maayazed/ORM-commerce' target="_blank" rel="noopener noreferrer">REPO</a></h5>
          </div>
          {/*  */}
          <div style={styles.flexColumnStyle} className='colorStyle'>
            <h3>Budget Tracker</h3>
            <p>A fullstack web application allowing users to record, track, and view income/ expenses. Components include
              <span aria-label='chart-emoji' role='img'> 📊</span>chart.js, MongoDB, mongoose models, and express server.
            </p>
            <div style={styles.gridRowStyle}>
              <h5><a href='https://powerful-brushlands-35485.herokuapp.com/' target="_blank" rel="noopener noreferrer">DEMO</a></h5>
              <h5><a href='https://github.com/maayazed/budget-tracker' target="_blank" rel="noopener noreferrer">REPO</a></h5>
            </div>
          </div>
        </div>

      </div>
      {/* end of body section */}
    </div>
    // end of export div
  );
}

export default Works;