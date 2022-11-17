import "../style/contact.scss";

const Contact = ({ view, toMain }) => {
  return (
    <section
      id="contact-section"
      className={view === "contact" ? "current" : undefined}
    >
      <button onClick={toMain}>go back</button>
    </section>
  );
};

export default Contact;
