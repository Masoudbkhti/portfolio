import { Container, Row, Col } from "react-bootstrap";
const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              ratione saepe dolorem reprehenderit ipsam facilis eius nostrum
              soluta facere commodi minus ipsa nobis vitae ad nisi odit alias
              odio? Possimus.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tap 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pain eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <p>{project.title}</p>;
                    })}
                  </Row>
                </Tab.Pain>
                <Tab.Pain eventKey="second">Lorem Ipsum</Tab.Pain>

                <Tab.Pain eventKey="third">Lorem Ipsum</Tab.Pain>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
