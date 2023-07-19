import useTranslation from "../../../customHooks/translations";
import "./Contact.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  const translation = useTranslation();
  return (
    <section className="Contact">
      <div className="contact-container">
        <h1 className="title">{translation.contact.title}</h1>
        <p className="paragraph">{translation.contact.subtitle}</p>
        <ContactForm />
      </div>
    </section>
  );
}