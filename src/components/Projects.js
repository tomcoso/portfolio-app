import "../style/projects.scss";

const Projects = ({ view, toMain }) => {
  return (
    <section
      id="projects-section"
      className={view === "projects" ? "current" : undefined}
    >
      <button onClick={toMain}>go back</button>
    </section>
  );
};

export default Projects;
