import React from "react";
import '../styles/Nav.css';
import Resume from '../files/Resume.pdf';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#works">Works</a></li>
          <li><a href="https://github.com/maayazed" target="_blank" rel="noopener noreferrer">
            Github
          </a></li>
          <li><a href="linkedin.com/in/mayah-zebrasky-b61b35219"
            target="_blank" rel="noopener noreferrer">
            Linkedin
          </a></li>
          <li>
            <Link to={'/email-form/'}>
              Contact
            </Link>
          </li>
          <li><a href={Resume} download='Resume-MAYAH'>Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;