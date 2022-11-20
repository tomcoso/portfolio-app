import "../style/main.scss";

const Main = ({ view, toView, prev, resetPrev }) => {
  const getTabIndex = () => (view === "main" ? "0" : "-1");

  return (
    <section
      id="main-section"
      className={view === "main" ? "current from-" + prev : "from-" + prev}
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
            >
              gh
            </a>
            <a
              href="https://www.linkedin.com/in/tom%C3%A1s-dessy-24a0a223a/"
              target="_blank"
              rel="noreferrer"
            >
              li
            </a>
          </div>
          <p>
            I found programing on a rainy day in a foreign country, and since
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
            onClick={() => {
              toView("projects");
              resetPrev();
            }}
          >
            <span>Projects</span>
          </button>
          <button
            tabIndex={getTabIndex()}
            id="to-about"
            onClick={() => {
              toView("about");
              resetPrev();
            }}
          >
            <span>About</span>
          </button>
          <button
            tabIndex={getTabIndex()}
            id="to-contact"
            onClick={() => {
              toView("contact");
              resetPrev();
            }}
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
