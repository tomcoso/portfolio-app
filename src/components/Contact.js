import "../style/contact.scss";
import ContactForm from "./ContactForm";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
// INSERT RESUME
// import resume from "PATH TO RESUME";

const Contact = ({ view, toMain }) => {
  const getTabIndex = () => (view === "contact" ? "0" : "-1");

  return (
    <section
      id="contact-section"
      className={view === "contact" ? "current" : undefined}
    >
      <div id="contact-content-wrap">
        <ContactForm tabIndex={getTabIndex()} />
        <nav>
          <div className="style-line"></div>
          <button tabIndex={getTabIndex()} onClick={() => toMain()}>
            <span>Home</span>
          </button>
        </nav>
        <div id="contact-info">
          <p>
            Let me know what you think of my work!
            <br />
            <br />
            <a
              tabIndex={getTabIndex()}
              href="mailto:tomasdessy0@gmail.com"
              without="true"
              rel="noopener noreferrer"
              target={"_blank"}
            >
              tomasdessy0@gmail.com
            </a>
          </p>
          <a
            href="https://github.com/tomcoso"
            target="_blank"
            rel="noreferrer"
            className="vertical"
            tabIndex={getTabIndex()}
          >
            <AiOutlineGithub color="#ffccbe" size="min(5vmax, 2rem)" />
          </a>
          <a
            href="https://www.linkedin.com/in/tom%C3%A1s-dessy-24a0a223a/"
            target="_blank"
            rel="noreferrer"
            className="vertical"
            tabIndex={getTabIndex()}
          >
            <AiFillLinkedin color="#ffccbe" size="min(5vmax, 2rem)" />
          </a>
          <button tabIndex={getTabIndex()}>
            <span>See Resume</span>
          </button>
          {/* <a href={resume} without rel="noopener noreferrer" target={"_blank"} tabIndex={getTabIndex()}>
            See Resume
          </a> */}
        </div>
      </div>
      <div className="contact-bg"></div>
    </section>
  );
};

export default Contact;
