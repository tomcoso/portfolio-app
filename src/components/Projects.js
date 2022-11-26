import "../style/projects.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { getProjects } from "../firebase-app";
import uniqid from "uniqid";

const Projects = ({ view, toMain }) => {
  const getTabIndex = () => (view === "projects" ? "0" : "-1");

  const [projects, setProjects] = useState();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const moveUp = () => {
    if (selected === 0) return;
    setSelected((x) => x - 1);
  };
  const moveDown = () => {
    if (selected === projects.lenght - 1) return;
    setSelected((x) => x + 1);
  };

  return (
    <section
      id="projects-section"
      className={view === "projects" ? "current" : undefined}
      tabIndex={getTabIndex()}
    >
      <div id="projects-content-wrap">
        <nav>
          <div className="style-line"></div>
          <button tabIndex={getTabIndex()} onClick={() => toMain()}>
            <span>Home</span>
          </button>
        </nav>

        <div id="projects-selector">
          <button tabIndex={getTabIndex()} onClick={moveUp}>
            <IoIosArrowUp />
          </button>
          <div id="selector-wrapper">
            {projects &&
              projects.map((x, i) => (
                <div
                  key={uniqid()}
                  className={
                    projects[selected].title === x.title
                      ? "selected-project"
                      : undefined
                  }
                >
                  <img src={x.favicon} alt="favicon" />
                  <h3>{x.title}</h3>
                </div>
              ))}
          </div>
          <button tabIndex={getTabIndex()} onClick={moveDown}>
            <IoIosArrowDown />
          </button>
        </div>

        <div id="projects-showcase"></div>
      </div>
    </section>
  );
};

export default Projects;
