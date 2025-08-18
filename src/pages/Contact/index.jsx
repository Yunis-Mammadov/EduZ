import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="contact-wrapper" data-aos="fade-up">
      <div className="contact-container">
        <div className="form-box">
          <h3>Let’s connect constellations</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Message" rows="4" required />
            <button type="submit">Send it</button>
          </form>
        </div>

        <div className="astro-box">
          <img src="contact.svg" alt="contact visual" />
          <p className="quote">
            Reach the stars, one message at a time.
            <span>— Our team</span>
          </p>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <p>✅ Your message has been sent to the moon!</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
