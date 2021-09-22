import React from 'react';
import Typewriter from 'typewriter-effect';


const Hero = ({goToWorkSection, goToAboutSection}) => {

  return (
  <>
  <section className="home_banner" id="home">
  <div className="inner-banner">
      <div className="container">
        <div className="flex flex-col">
            <div className="col-text">
                <div className="banner_content">
                    <h3 className="hero-text">Hello </h3>
                    <h1 className="hero-text">I AM Vishakha Khatade</h1>
                    <h5 className="hero-text">
                    <Typewriter
                        options={{
                            strings: ["Full-Stack Developer", "MERN Developer", "Web Developer", "Web Designer"], 
                            autoStart: true,
                            loop: true,
                        }}
                    /> </h5>
                    <div className="buttons">
                        <button 
                          onClick={goToWorkSection}
                          className="btn primary-btn">View my work
                        </button>
                        <button 
                        onClick={goToAboutSection}
                        className="btn secondary-btn">About me</button>
                    </div>
                </div>
            </div>
            <div className="col-img hide-img">
                <img className="img-responsive" src="/images/focus.svg" alt="girl coding"></img>
            </div>
        </div>
        </div>
    </div>
  </section>
  </>
  )
};

export default Hero;