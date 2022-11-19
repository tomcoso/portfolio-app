import "../style/main.scss";

const Main = ({ view, toView, prev, resetPrev }) => {
  const getTabIndex = () => (view === "main" ? "0" : "-1");

  return (
    <section
      id="main-section"
      className={view === "main" ? "current from-" + prev : "from-" + prev}
    >
      <div>
        <h1>Tomas Dessy</h1>
        <p>Web Developer</p>
      </div>
      <nav>
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
    </section>
  );
};

export default Main;
