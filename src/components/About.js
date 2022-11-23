import "../style/about.scss";
import { DiJavascript1, DiCss3, DiReact, DiHtml5, DiGit } from "react-icons/di";
import { SiRedux } from "react-icons/si";

const About = ({ view, toMain }) => {
  const getTabIndex = () => (view === "about" ? "0" : "-1");

  return (
    <section
      id="about-section"
      className={view === "about" ? "current" : undefined}
    >
      <div id="about-content-wrap">
        <nav>
          <div className="style-line"></div>
          <button tabIndex={getTabIndex()} onClick={() => toMain()}>
            <span className="vertical">Home</span>
          </button>
        </nav>
        <div id="about-info">
          <div>
            <p>
              I am a self taugth front end developer, I enjoy building modern
              websites and apps that are scalable and tidy, where pragmatism and
              readability is a priority. I believe code can be an expression of
              both simplicity and complexity.
            </p>
            <p>
              I love learning new concepts and technologies and exploring new
              ideas. So I am always open to opportunities to continue developing
              my skills and move forward in the industry.
            </p>
          </div>
          <p>
            Born in Argentina, Buenos Aires, 1998. I always have had too many
            interests for my own good, until, by discovering programing, I found
            a syncretism of art and pragmatism, expression and order.
          </p>
        </div>
        <div id="about-icons">
          <div className="style-line"></div>
          <DiGit color="#ffccbe" size="min(5vmax, 2rem)" />
          <DiJavascript1 color="#ffccbe" size="min(5vmax, 2rem)" />
          <DiHtml5 color="#ffccbe" size="min(5vmax, 2rem)" />
          <DiCss3 color="#ffccbe" size="min(5vmax, 2rem)" />
          <DiReact color="#ffccbe" size="min(5vmax, 2rem)" />
          <SiRedux color="#ffccbe" size="min(4.5vmax, 1.8rem)" />
        </div>
      </div>
      <div className="speckles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default About;
