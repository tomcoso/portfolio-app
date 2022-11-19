import "../style/contact.scss";

const Contact = ({ view, toMain, resetPrev }) => {
  const getTabIndex = () => (view === "contact" ? "0" : "-1");

  return (
    <section
      id="contact-section"
      className={view === "contact" ? "current" : undefined}
    >
      <button
        tabIndex={getTabIndex()}
        onClick={() => {
          toMain();
          resetPrev();
        }}
      >
        go back
      </button>
    </section>
  );
};

export default Contact;
