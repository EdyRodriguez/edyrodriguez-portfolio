import React, { useState } from "react";
import useTranslation from "../../../customHooks/translations";
import "./Contact.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createMailToLink = () => {
    return `mailto:edgar.rodriguez.dev@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
  };
  const translation = useTranslation();
  return (
    <form className="contact-form">
      <label htmlFor="name">{translation.contact.form.name}</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="message">{translation.contact.form.message}</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <a href={createMailToLink()} target="_blank" rel="noopener noreferrer">
        {translation.contact.form.button}
      </a>
    </form>
  );
};

export default ContactForm;
