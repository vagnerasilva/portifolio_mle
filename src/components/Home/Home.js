import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Olá !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Eu Sou o
                <strong className="main-name"> VAGNER A. SILVA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <p style={{ 
                fontSize: "1.1em",
                color: "rgba(255, 255, 255, 0.85)",
                marginTop: "20px",
                paddingLeft: "50px",
                lineHeight: "1.6"
              }}>
                Para mais informações sobre minha experiência, projetos e expertise,
                <strong style={{ color: "#c770f0", marginLeft: "5px" }}>
                  converse com o FocaBot
                </strong>
                {" "}no chat abaixo! 💬
              </p>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
