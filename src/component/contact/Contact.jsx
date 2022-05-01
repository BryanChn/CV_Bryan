import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3p1kole",
        "template_c8bpgq7",
        form.current,
        "GUgcQItb8IHct2rGI"
      )
      .then(
        (result) => {
          result = alert(" E-mail envoyez !");
        },
        (error) => {
          error = alert(" Oups ! Une erreur s'est produite.");
        }
      );
  };
  return (
    <section id="Contact">
      <h5> N'hesitez pas à </h5>
      <h2>me contacter !</h2>

      <div className="contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>bryan.chaine@gmail.com</h5>
            <a href="mailto:bryan.chaine@gmail.com" target="_blank">
              Envoyez moi un e-mail !
            </a>
          </article>
          <article className="contact_option">
            <BsMessenger className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>Chaine Bryan</h5>
            <a href="https://m.me/bryan.chaine" target="_blank">
              Envoyez moi un message !
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Entrez votre Nom et Prénom"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Entrez votre email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Saisissez votre  message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyez votre message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
