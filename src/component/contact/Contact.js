import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // handle backend/email logic here
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-text">
          Need my service,or give feedback about my previous projects? Send me an email message or reach me directly via phone. I will get back to you as soon as possible.
        </p>

        <div className="contact-info">
          <div>
            <h2>Email</h2>
            <a href="mailto:adewalem88@gmail.com">adewalem88@gmail.com</a>
          </div>
          <div>
            <h2>Phone</h2>
            <a href="tel:+2347037627565">+2347037627565</a>
          </div>
        </div>

        <hr className="divider" />

        {submitted ? (
          <div className="thank-you">Thank you for contacting us! We will respond soon.</div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        )}

        
      </div>
    </div>
  );
};

export default Contact;
