import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import plantimg1 from "../assets/img/plant proj.png";
import plantimg2 from "../assets/img/plant proj 2.png";
import profit1 from "../assets/img/profit1.png";
import profit2 from "../assets/img/profit2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "GAME DEVELOPMENT",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "IGI RTX",
      description:
        "A Single player tactical shooter made with c++ and unreal engine",
      imgUrl: projImg2,
    },
    {
      title: "IGI RTX",
      description:
        "A Single player tactical shooter made with c++ and unreal engine",
      imgUrl: projImg3,
    },
    {
      title: "IGI RTX",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Plant Disease classifier",
      description:
        "A Machine learning model that classifies plant diseases using CNN and Keras",
      imgUrl: plantimg1,
    },
    {
      title: "Plant Disease classifier",
      description:
        "A Machine learning model that classifies plant diseases using CNN and Keras",
      imgUrl: plantimg2,
    },
    {
      title: "profit plus",
      description:
        "Data to top 50 comapnaies in india by revenue, sales and domain",
      imgUrl: profit1,
    },
    {
      title: "profit plus",
      description:
        "Data to top 50 comapnaies in india by revenue, sales and domain",
      imgUrl: profit2,
    },
  ];

  return (
    <>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Projects</h2>
                    <p>
                      Tab one has Unreal Engine Projects.
                      {"\n"}
                      tab 2 has Web Development projects.
                      {"\n"}
                      tab 3 has core c++ and Blender projects.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
      <center>
        <a href="https://www.linkedin.com/in/gunjan-sarode-b19ba9225/">
          <button
            style={{
              backgroundColor: "purple", // green
              fontSize: 32,
              paddingVertical: 50,
              paddingHorizontal: 50,
              padding: 12,
              borderRadius: 7,
              cursor: "pointer",
              color: "white",
            }}
            onClick={() => console.log("button clicked")}
          >
            Download Resume
          </button>
        </a>
      </center>
    </>
  );
};
