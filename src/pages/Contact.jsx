import React, { useState } from 'react';
import { FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill all fields.');
      return;
    }

    // Instead of sending email, we open Gmail draft
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:ksyedamidhat@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setStatus('Email draft opened! You can send it directly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-purple-100 via-pink-100 to-yellow-100 flex flex-col justify-center items-center px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
      <p className="text-gray-600 text-center mb-10 max-w-xl">
        You can contact me via WhatsApp, LinkedIn, or email. Or fill the form below.
      </p>

      {/* Direct Contact Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href="https://wa.me/923211722775"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
        >
          <FaWhatsapp /> WhatsApp
        </a>
        <a
          href="https://www.linkedin.com/in/syeda-midhat-kazmi-a5111a339/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800 transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="mailto:ksyedamidhat@gmail.com"
          className="flex items-center gap-2 px-5 py-2 bg-purple-500 text-white rounded-full shadow hover:bg-purple-600 transition"
        >
          <FaEnvelope /> Email
        </a>
      </div>

      {/* Status Message */}
      {status && (
        <p className={`mb-6 font-medium ${status.includes('opened') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition"
        >
          Open Email Draft
        </button>
      </form>
    </div>
  );
};

export default Contact;
