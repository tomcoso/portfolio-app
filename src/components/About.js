import "../style/about.scss";

const About = ({ view, toMain, resetPrev }) => {
  const getTabIndex = () => (view === "about" ? "0" : "-1");

  return (
    <section
      id="about-section"
      className={view === "about" ? "current" : undefined}
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

export default About;
