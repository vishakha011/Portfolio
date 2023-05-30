import React from 'react';

import { BiDownload } from 'react-icons/bi';


const About =({ aboutSection }) => {
  return (
    <>
      <section className="about-section" id="about" ref={aboutSection}>
        <div className="container">
          <div className=" flex flex-col">
            <div className="col-img hide-img">
              <img className="img-responsive about-img" src="/images/introduction.svg" alt="girl working on laptop" />
            </div>
            <div className="col-img introduction">
              <div className="about-section__heading main-text">
                <h2 className="main-title">About Me</h2>
                <p>I am a Full-Stack Developer and can efficiently code websites and applications using MERN Stack.</p>
                <p>I care deeply about building applications that are usable and pleasant for the most number of people possible. I am currently seeking an opportunity as a full-stack developer in a fast-paced organisation where I can expand my skills while contributing to the success of the company.</p>
              </div>
              <div className="download-btn">
                <a href="/resume/Vishakha_Khatade_Resume.pdf" target="_blank" rel="noopener noreferrer" download> 
                  <button className="btn secondary-download-btn">
                    <span>Resume</span> 
                    <div className="download-icon">
                      <BiDownload className="icon" />
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
