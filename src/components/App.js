import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Main from "./Main";
import { useState } from "react";
import "../style/root.scss";

function App() {
  const [view, setView] = useState("main");

  return (
    <div id="page-grid">
      <Main
        view={view}
        toView={(newView) => view === "main" && setView(newView)}
      />
      <About view={view} toMain={() => view === "about" && setView("main")} />
      <Projects
        view={view}
        toMain={() => view === "projects" && setView("main")}
      />
      <Contact
        view={view}
        toMain={() => view === "contact" && setView("main")}
      />
    </div>
  );
}

export default App;
