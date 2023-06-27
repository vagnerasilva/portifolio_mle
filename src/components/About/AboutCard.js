import React from "react";
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, sou <span className="purple">Vagner A Silva. </span>
            <br />
            <br /> Sou formado em bacharelado em Geofísica pelo IAG-USP, caso 
            tenha curiosidade sobre o que é geofísica (
            <a href="https://www.iag.usp.br/~eder/geofisica/CARTILHA_GEOFISICA_A6_final_com_sangria.pdf">
               Saiba mais! </a> )
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
            No momento, atuo como <span className="purple">Engenheiro de Machine Learning </span>
            no setor bancario, desenvolvento plataformas e ferramentas de MLOPS para o dia dia dos cientistas de dados.</p>
            <br />
            <br />

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
