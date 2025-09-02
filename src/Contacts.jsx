import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [time, setTime] = useState(new Date());
  const [theme, setTheme] = useState('morning'); // default theme
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Theme handler
  useEffect(() => {
    const updateTheme = () => {
      const now = new Date();
      setTime(now);

      const hour = now.getHours();
      if (hour >= 5 && hour < 12) setTheme('morning');
      else if (hour >= 12 && hour < 17) setTheme('afternoon');
      else if (hour >= 17 && hour < 21) setTheme('evening');
      else setTheme('midnight');
    };

    updateTheme();
    const timer = setInterval(updateTheme, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_tfr6p7e',     // your service_id
      'template_r23haq5',    // your template_id
      formData,             // the object { name, email, message }
      'rXX7A8aGZL-oerm6s' // your public_key
    ).then(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }).catch((err) => {
      console.error('Failed to send:', err);
    });
  };

  return (
    <>
      <Header time={time} theme={theme} />

      <div className="contacts-form">
        <h2>Let's connect</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="name"
              placeholder="FULL NAME"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="COMMENT"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">SUBMIT</button>
          </form>
        ) : (
          <p>✅ Thanks! Your message has been sent.</p>
        )}
      </div>

      <div className="contacts-container">
        <h2>CONTACTS</h2>
        <p>You can write me an email: daniel.noshadha21@gmail.com</p>
        <p>
          Don’t like emails? No problem, just fill out this form to contact me
          directly.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
