import "../style/projects.scss";
import {
  SlArrowDown,
  SlArrowLeft,
  SlArrowUp,
  SlArrowRight,
} from "react-icons/sl";
import { DiJavascript1, DiCss3, DiReact, DiHtml5 } from "react-icons/di";
import { SiRedux, SiFirebase, SiJest } from "react-icons/si";
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

  const getTechIcons = (val) => {
    switch (val) {
      case "react":
        return <DiReact color="#ffccbe" size="min(5vmax, 2rem)" />;
      case "javascript":
        return <DiJavascript1 color="#ffccbe" size="min(5vmax, 2rem)" />;
      case "css":
        return <DiCss3 color="#ffccbe" size="min(5vmax, 2rem)" />;
      case "html":
        return <DiHtml5 color="#ffccbe" size="min(5vmax, 2rem)" />;
      case "redux":
        return <SiRedux color="#ffccbe" size="min(4.3vmax, 1.6rem)" />;
      case "firebase":
        return <SiFirebase color="#ffccbe" size="min(5vmax, 2rem)" />;
      case "jest":
        return <SiJest color="#ffccbe" size="min(4.3vmax, 1.6rem)" />;
      default:
        return;
    }
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
                >
                  Demo
                </a>
              </div>
              <span className="projects-tech-stack">
                {projects[selected].tech.map((x) => (
                  <div key={uniqid()}>{getTechIcons(x)}</div>
                ))}
              </span>
              <p>{projects[selected].description}</p>
              <a
                className="projects-to-repo"
                href={projects[selected].repo}
                rel="noreferrer"
                target="_blank"
              >
                Code
              </a>
              <aside id="showcase-images"></aside>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
