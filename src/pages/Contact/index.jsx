import React, { useState } from 'react';


const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000); // Modal 3 saniyə sonra bağlanır
  };

  return (
    <div className="contact-wrapper">
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
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Send it 🚀</button>
          </form>
        </div>

        <div className="astro-box">
          <img src="contact.svg" alt="contact visual" />
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
