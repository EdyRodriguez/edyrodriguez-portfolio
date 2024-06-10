import React, { useState } from "react";
import useTranslation from "../../../customHooks/translations";

export default function Contact() {
  const translation = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:edgar.rodriguez.dev@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-form-section py-8 px-4">
      <h1 className="text-3xl mb-8 text-center text-text-color">{translation.contact.title}</h1>
      <form
        className="contact-form max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            {translation.contact.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder={translation.contact.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            {translation.contact.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder={translation.contact.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            {translation.contact.message}
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder={translation.contact.messagePlaceholder}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            {translation.contact.submit}
          </button>
        </div>
      </form>
    </section>
  );
}
