import "../style/about.scss";
import { DiJavascript1, DiCss3, DiReact, DiHtml5, DiGit } from "react-icons/di";
import { SiRedux, SiJest } from "react-icons/si";

const About = ({ view, toMain }) => {
  const getTabIndex = () => (view === "about" ? "0" : "-1");

  return (
    <section id="about-section" className={view === "about" ? "current" : ""}>
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
              I am a self-taugth front-end developer, that enjoys building
              modern websites and apps that are scalable and tidy, where
              pragmatism and readability is a priority. My belief is that code
              can be an expression of both simplicity and complexity.
            </p>
            <p>
              Learning new concepts and technologies and exploring new ideas is
              something I love. So I am always open to opportunities to continue
              developing my skills and move forward in the industry.
            </p>
          </div>
          <p>
            Born in Argentina, Buenos Aires, 1998. I always have had too many
            interests for my own good, until, by discovering programing, found a
            syncretism of art and pragmatism, expression and order.
          </p>
        </div>
        <div id="about-icons">
          <div className="style-line"></div>
          <DiGit color="#fffcb7" size="min(5vmax, 2rem)" />
          <DiJavascript1 color="#fffcb7" size="min(5vmax, 2rem)" />
          <DiHtml5 color="#fffcb7" size="min(5vmax, 2rem)" />
          <DiCss3 color="#fffcb7" size="min(5vmax, 2rem)" />
          <DiReact color="#fffcb7" size="min(5vmax, 2rem)" />
          <SiRedux color="#fffcb7" size="min(4.5vmax, 1.8rem)" />
          <SiJest color="#fffcb7" size="min(4.3vmax, 1.6rem)" />
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
