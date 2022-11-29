import "../style/projects.scss";
import {
  SlArrowDown,
  SlArrowLeft,
  SlArrowUp,
  SlArrowRight,
} from "react-icons/sl";
import TechIcon from "./TechIcon";
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
    if (selected === projects.length - 1) return;
    setSelected((x) => x + 1);
  };

  const style = {
    desktop: { transform: `translateY(-${selected * 50}px)` },
    mobile: {
      transform: `translateX(-${(selected + 1) * 200 - 20}px)`,
      width: (projects && projects.length + 2) * 200 + "px",
    },
  };

  return (
    <section
      id="projects-section"
      className={view === "projects" ? "current" : undefined}
      tabIndex={getTabIndex()}
    >
      <div id="projects-content-wrap">
        <div id="projects-selector">
          <button tabIndex={getTabIndex()} onClick={moveUp}>
            {window.visualViewport.width < 800 ? (
              <SlArrowLeft color="#ffccbe" size={"2rem"} />
            ) : (
              <SlArrowUp color="#ffccbe" size={"2rem"} />
            )}
          </button>
          <div id="selector-wrapper">
            <div
              style={
                window.visualViewport.width < 800 ? style.mobile : style.desktop
              }
            >
              <div className="selector-end">
                <div className="style-line"></div>
                <div className="style-line"></div>
              </div>
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
              <div className="selector-end">
                <div className="style-line"></div>
                <div className="style-line"></div>
              </div>
            </div>
          </div>
          <button tabIndex={getTabIndex()} onClick={moveDown}>
            {window.visualViewport.width < 800 ? (
              <SlArrowRight color="#ffccbe" size={"2rem"} />
            ) : (
              <SlArrowDown color="#ffccbe" size={"2rem"} />
            )}
          </button>
          <div className="projects-current-wrap"></div>
        </div>

        <nav>
          <div className="style-line"></div>
          <button tabIndex={getTabIndex()} onClick={() => toMain()}>
            <span>Home</span>
          </button>
        </nav>

        <div id="projects-showcase">
          {projects && (
            <>
              <h3>{projects[selected].title}</h3>
              <div className="projects-to-demo">
                <div className="style-line"></div>
                <a
                  href={projects[selected].demo}
                  rel="noreferrer"
                  target="_blank"
                  tabIndex={getTabIndex()}
                >
                  Demo
                </a>
              </div>
              <span className="projects-tech-stack">
                {projects[selected].tech.map((x) => (
                  <div
                    key={uniqid()}
                    data-name={x[0].toUpperCase() + x.slice(1)}
                  >
                    <TechIcon val={x} />
                  </div>
                ))}
                <a
                  className="projects-to-repo"
                  href={projects[selected].repo}
                  rel="noreferrer"
                  target="_blank"
                  tabIndex={getTabIndex()}
                >
                  Code
                </a>
              </span>
              <p>{projects[selected].description}</p>

              <aside id="showcase-images">
                {projects[selected].pictures.map((x, i) => (
                  <div key={uniqid()}>
                    <img src={x} alt={x.title + " " + i} />
                  </div>
                ))}
              </aside>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
