import "../style/main.scss";

const Main = ({ view, toView }) => {
  const getTabIndex = () => (view === "main" ? "0" : "-1");

  return (
    <section
      id="main-section"
      className={view === "main" ? "current" : undefined}
    >
      <div id="main-content-wrap">
        <div className="main-title">
          <h1>Tomas Dessy</h1>
          <p>Web Developer</p>
        </div>

        <div className="main-info">
          <div>
            <div className="style-line"></div>
            <a
              href="https://github.com/tomcoso"
              target="_blank"
              rel="noreferrer"
              className="vertical"
              tabIndex={getTabIndex()}
            >
              gh
            </a>
            <a
              href="https://www.linkedin.com/in/tom%C3%A1s-dessy-24a0a223a/"
              target="_blank"
              rel="noreferrer"
              className="vertical"
              tabIndex={getTabIndex()}
            >
              li
            </a>
          </div>
          <p>
            Programing found me on a rainy day in a foreign country, and since
            then it has been my passion.
            <br />
            <br />I love ideas, communication, and moving forward.
          </p>
        </div>

        <nav>
          <div className="nav style-line"></div>
          <button
            tabIndex={getTabIndex()}
            id="to-projects"
            onClick={() => toView("projects")}
          >
            <span>Projects</span>
          </button>
          <button
            tabIndex={getTabIndex()}
            id="to-about"
            onClick={() => toView("about")}
          >
            <span>About me</span>
          </button>
          <button
            tabIndex={getTabIndex()}
            id="to-contact"
            onClick={() => toView("contact")}
          >
            <span>Contact</span>
          </button>
        </nav>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default Main;
