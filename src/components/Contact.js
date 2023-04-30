import "../style/contact.scss";
import ContactForm from "./ContactForm";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import resume from "../CV2023NZ01.pdf";

const Contact = ({ view, toMain }) => {
  const getTabIndex = () => (view === "contact" ? "0" : "-1");

  const handleResumeView = () => {
    window.open(resume, "_blank");
  };

  return (
    <section
      id="contact-section"
      className={view === "contact" ? "current" : ""}
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
            <AiOutlineGithub color="#fffcb7" size="min(5vmax, 2rem)" />
          </a>
          <a
            href="https://www.linkedin.com/in/tom%C3%A1s-dessy-24a0a223a/"
            target="_blank"
            rel="noreferrer"
            className="vertical"
            tabIndex={getTabIndex()}
          >
            <AiFillLinkedin color="#fffcb7" size="min(5vmax, 2rem)" />
          </a>
          <button tabIndex={getTabIndex()} onClick={handleResumeView}>
            <span>See Resume</span>
          </button>
        </div>
      </div>
      <div className="contact-bg"></div>
    </section>
  );
};

export default Contact;
