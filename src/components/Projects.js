import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/kpi.jpg";
import projImg2 from "../assets/img/banking.png";
import projImg3 from "../assets/img/ecommerce.jpg";
import projImg4 from "../assets/img/car.jpg";
import projImg5 from "../assets/img/check.jpg";
import projImg6 from "../assets/img/portfolio.webp";

const projects1 = [
  {
    title: "KPI (Key Performance Indicator) Dashboard Project",
    description: "",
    imgUrl: projImg1,
  },
  {
    title: "Banking System",
    description: "",
    imgUrl: projImg2,
  },
  {
    title: "E-Commerce Online Store",
    description: "",
    imgUrl: projImg3,
  },
];

const projects2 = [
  {
    title: "Transportion Mobile App",
    description: "",
    imgUrl: projImg4,
  },
  {
    title: "TO-DO List Tool",
    description: "",
    imgUrl: projImg5,
  },
  {
    title: "Portfolio Website",
    description: "",
    imgUrl: projImg6,
  },
];

const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <h2>Projects</h2>
          <Row>
            {projects1.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </Row>
          <Row>
            {projects2.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </Row>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="null" />
      <img
        className="background-image-top-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};

export default Projects;
