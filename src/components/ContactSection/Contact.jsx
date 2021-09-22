import React from 'react';

import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      <section className="contact-section " id="contact">
          <div className="container contact-bg">
          <div className="contact-section__heading main-text">
              <h2 className="main-title">Contact Me</h2>
              <blockquote className="quote">Have a question or want to collaborate with me?</blockquote>
            </div>
            <div className="contact-container grid grid-center col col-gap">
              <div className="contact-container__text">
                <h3>Don't be a stranger Just say hello !!</h3>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              </div>
              <div className="contact-container__form">
              <ContactForm />
              </div>
            </div>
          </div>

      </section>
    </>
  )
};

export default Contact;
