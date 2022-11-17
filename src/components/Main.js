import "../style/main.scss";

const Main = ({ view, toView }) => {
  return (
    <section
      id="main-section"
      className={view === "main" ? "current" : undefined}
    >
      <button onClick={() => toView("projects")}>projects</button>
      <button onClick={() => toView("about")}>about</button>
      <button onClick={() => toView("contact")}>contact</button>
    </section>
  );
};

export default Main;
