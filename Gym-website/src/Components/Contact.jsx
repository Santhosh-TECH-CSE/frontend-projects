import React from 'react';
import '../Styles/Contact.css';
const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='contact-overlay'>
        <h2>Contact</h2><span>RebelFit Gym</span>
        <p>Have questions or want to join? Let's get in touch!</p>

        <form className='contact-form'>
          <div className='input-group'>
            <input type="text" placeholder='Name' required/>
            <input type="email" placeholder='Email' required />
          </div>
          <input type="text" placeholder='Subject' required />
          <button type='submit' className='contact-btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
