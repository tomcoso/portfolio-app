import { DiJavascript1, DiCss3, DiReact, DiHtml5 } from "react-icons/di";
import { SiRedux, SiFirebase, SiJest } from "react-icons/si";

const TechIcon = ({ val }) => {
  switch (val) {
    case "react":
      return <DiReact color="#fffcb7" size="min(5vmax, 2rem)" />;
    case "javascript":
      return <DiJavascript1 color="#fffcb7" size="min(5vmax, 2rem)" />;
    case "css":
      return <DiCss3 color="#fffcb7" size="min(5vmax, 2rem)" />;
    case "html":
      return <DiHtml5 color="#fffcb7" size="min(5vmax, 2rem)" />;
    case "redux":
      return <SiRedux color="#fffcb7" size="min(4.3vmax, 1.6rem)" />;
    case "firebase":
      return <SiFirebase color="#fffcb7" size="min(5vmax, 2rem)" />;
    case "jest":
      return <SiJest color="#fffcb7" size="min(4.3vmax, 1.6rem)" />;
    default:
      return;
  }
};

export default TechIcon;
