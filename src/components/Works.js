import React from 'react';
import '../styles/Works.css';

const styles = {
  overlayStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'normal',
    alignItems: 'center',
    color: '#ffffff',
  },
  flexRowStyle: {
    display: 'flex',
    flexDirection: 'row',
    padding: '15px',
  },
  flexColumnStyle: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
  },
  gridRowStyle: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
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
      <div className='body-section'>
        <h2>Collaborative</h2>
        <div style={styles.flexRowStyle} className='colorStyle'>
          <div style={styles.flexColumnStyle} className='colorStyle'>
            <h3>Stock Finder</h3>
            <p>A front end web application for searching company stocks with server-side API requests.</p>
            <div style={styles.gridRowStyle}><h5>DEMO</h5><h5>REPO</h5></div>
          </div>
          {/*  */}
          <div style={styles.flexColumnStyle} className='colorStyle'>
            <h3>The Hat Trick Platform</h3>
            <p>A fullstack web application for documentation of hockey statistics utilizing the MVC paradigm.</p>
            <div style={styles.gridRowStyle}><h5>DEMO</h5><h5>REPO</h5></div>
          </div>
        </div>
        {/*  */}
        <h2>Solo</h2>
        <div className='colorStyle'>

          <div style={styles.flexRowStyle}>
            <div style={styles.flexColumnStyle} className='colorStyle'>
              <h3>Note Taker</h3>
              <p>An express server orientated application for adding, removing, and editing notes.</p>
              <div style={styles.gridRowStyle}><h5>DEMO</h5><h5>REPO</h5></div>
            </div>
            {/*  */}
            <div style={styles.flexColumnStyle} className='colorStyle'>
              <h3>Employee Tracker</h3>
              <p>An interface content management system tool intended for tracking company employees utilizing a MySQL database.</p>
              <h5>REPO</h5>
            </div>
          </div>
          {/*  */}
          <div style={styles.flexRowStyle}>
            <div style={styles.flexColumnStyle} className='colorStyle'>
              <h3>ORM-Commerce</h3>
              <p>An e-commerce backend model using object relational mapping programming used with Insomnia client API.</p>
              <h5>REPO</h5>
            </div>
            {/*  */}
            <div style={styles.flexColumnStyle} className='colorStyle'>
              <h3>Budget Tracker</h3>
              <p>A fullstack web application allowing users to record, track, and view income/ expenses. Components include
                <span aria-label='chart-emoji' role='img'> 📊</span>chart.js, MongoDB, mongoose models, and express server.
              </p>
              <div style={styles.gridRowStyle}><h5>DEMO</h5><h5>REPO</h5></div>
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