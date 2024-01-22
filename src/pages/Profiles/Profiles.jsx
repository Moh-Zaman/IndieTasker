import React from 'react';
import './Profiles.css';

const Profiles = () => {
  return (
    <div className="profiles-container">
      <div className="profiles-picture">
        {/* Profile picture section */}
        <img src="path/to/profile-picture.jpg" alt="Profile" />
      </div>
      <div className="profiles-about">
        {/* About me section */}
        <h2 className="profiles-about-title">About Me</h2>
        <p className="profiles-about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="profiles-skills">
        {/* Skills section */}
        <h2 className="profiles-skills-title">Skills</h2>
        <ul className="profiles-skills-list">
          <li className="profiles-skills-item">JavaScript</li>
          <li className="profiles-skills-item">React</li>
          <li className="profiles-skills-item">HTML</li>
          <li className="profiles-skills-item">CSS</li>
        </ul>
      </div>
      <div className="profiles-projects">
        {/* Project display section */}
        <h2 className="profiles-projects-title">Projects</h2>
        <div className="profiles-projects-list">
          {/* Display individual projects here */}
          <div className="profiles-project">
            <h3 className="profiles-project-title">Project 1</h3>
            <p className="profiles-project-description">
              A brief description of the project goes here.
            </p>
          </div>
          <div className="profiles-project">
            <h3 className="profiles-project-title">Project 2</h3>
            <p className="profiles-project-description">
              Another project description goes here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
