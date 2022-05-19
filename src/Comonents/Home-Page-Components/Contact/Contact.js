import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerFill, RiWhatsappLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_okvwxcp",
      "template_rhryx88",
      form.current,
      "q9rdncXnkySUUPSUs"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact--container">
        <div className="contact--options">
          <article className="contact--option">
            <MdOutlineEmail className="contact--option-icon" />
            <h4>Email</h4>
            <h5>jonathan.elf97@gmail.com</h5>
            <a
              href="mailto:jonathan.elf97@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send an email
            </a>
          </article>
          <article className="contact--option">
            <RiMessengerFill className="contact--option-icon" />
            <h4>Messenger</h4>
            <h5>JonathanElf97</h5>
            <a
              href="https://m.me/JonathanElf97"
              target="_blank"
              rel="noreferrer"
            >
              Send an email
            </a>
          </article>
          <article className="contact--option">
            <RiWhatsappLine className="contact--option-icon" />
            <h4>WhatsApp</h4>
            <h5>+4407380510501 (UK)</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+4407380510501"
              target="_blank"
              rel="noreferrer"
            >
              Send an message
            </a>
          </article>
        </div>
        {/* End of contact options */}
        <form
          onSubmit={sendEmail}
          ref={form}
          actions=""
          className="contact--form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
