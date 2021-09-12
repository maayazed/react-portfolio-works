import React from "react";
import '../styles/Nav.css';
import Resume from '../files/Resume-MAAYAZED.pdf';

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#works">Works</a></li>
          <li><a href="https://github.com/maayazed" target="_blank" rel="noopener noreferrer">
            Github
          </a></li>
          <li><a href="https://www.linkedin.com/in/maaya-zed-b61b35219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuGoSU%2B1XSUWytp7DH91lJQ%3D%3D"
            target="_blank" rel="noopener noreferrer">
            Linkedin
          </a></li>
          <li>zerreod@outlook.com</li>
          <li><a href={Resume} download='Resume-MAAYAZED'>Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;