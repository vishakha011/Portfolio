import React from 'react'

const ContactForm = () => {
    return (
        <>
        <form 
            action="https://formspree.io/f/xrgrjrlr"
            method="POST"
            className="form">
            <input name="name" placeholder="Your Name" type="text" id="name" required />
            <input name="_replyto" placeholder="Your Email" type="email" id="email" required />
            <textarea name="message" rows="4" placeholder="Write a message.." required></textarea>
            <button className="btn form-btn" type="submit">Submit</button>
        </form>
        </>
    )
}

export default ContactForm;
