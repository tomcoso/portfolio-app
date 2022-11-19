import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Main from "./Main";
import { useState } from "react";
import "../style/root.scss";

function App() {
  const [view, setView] = useState("main");
  const [previous, setPrevious] = useState("main");

  return (
    <div id="page-grid" className={view}>
      <Main
        view={view}
        toView={(newView) => view === "main" && setView(newView)}
        prev={previous}
        resetPrev={() => setPrevious("main")}
      />
      <About
        view={view}
        toMain={() => view === "about" && setView("main")}
        resetPrev={() => setPrevious("about")}
      />
      <Projects
        view={view}
        toMain={() => view === "projects" && setView("main")}
        resetPrev={() => setPrevious("projects")}
      />
      <Contact
        view={view}
        toMain={() => view === "contact" && setView("main")}
        resetPrev={() => setPrevious("contact")}
      />
    </div>
  );
}

export default App;
