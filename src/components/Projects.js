import "../style/projects.scss";

const Projects = ({ view, toMain }) => {
  const getTabIndex = () => (view === "projects" ? "0" : "-1");

  return (
    <section
      id="projects-section"
      className={view === "projects" ? "current" : undefined}
      tabIndex={getTabIndex()}
    >
      <button tabIndex={getTabIndex()} onClick={() => toMain()}>
        go back
      </button>
    </section>
  );
};

export default Projects;
