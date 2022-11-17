import "../style/about.scss";

const About = ({ view, toMain }) => {
  return (
    <section
      id="about-section"
      className={view === "about" ? "current" : undefined}
    >
      <button onClick={toMain}>go back</button>
    </section>
  );
};

export default About;
