import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ tabIndex }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("not-sent");
  const form = useRef();

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "contact_service",
        "portfolio_contact",
        form.current,
        "9k84A-r8uO33JrRBV"
      )
      .then(
        (res) => {
          clearForm();
          setStatus("sent");
        },
        (error) => {
          setStatus("failed");
          console.error("Failed to send email", error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={status} id="contact-form">
      <div className="style-line"></div>
      <h4>Send me a message!</h4>
      <ul>
        <li>
          <label htmlFor="user_name">Name</label>
          <input
            tabIndex={tabIndex}
            type={"text"}
            name="user_name"
            id="user_name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </li>
        <li>
          <label htmlFor="user_email">Email address</label>
          <input
            tabIndex={tabIndex}
            type={"email"}
            name="user_email"
            id="user_email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </li>
        <li>
          <label htmlFor="message">Message</label>
          <textarea
            tabIndex={tabIndex}
            name="message"
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </li>
      </ul>
      <button tabIndex={tabIndex}>
        <span>Send</span>
      </button>
    </form>
  );
};

export default ContactForm;
