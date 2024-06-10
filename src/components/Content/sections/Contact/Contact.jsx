import React from "react";
import useTranslation from "../../../customHooks/translations";

export default function Contact() {
  const translation = useTranslation();

  return (
    <section className="contact-form-section py-8 px-4">
      <h1 className="text-3xl mb-8 text-center text-white">{translation.contact.title}</h1>
      <form className="contact-form max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
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
