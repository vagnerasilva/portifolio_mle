import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  SiPython,
} from "react-icons/si";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Minha Timeline <strong className="purple">profissional </strong>
        </h1>
        <p style={{ color: "white" }}>
          Uma pequena visao da minhas experiencias de trabalho no formato timeline.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="07/2021 - Até o momento"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">ITAU</h4>
            <p>
              Desenvolvendo Plataformas e ferramentas MLOPS para os times de Data Science.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="01-2020 - 07-2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Consultor Inteligencia Artificial / Machine Learning Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture</h4>
            <p>
            Consultor de IA no desenvolvimento e implantação de soluções,
            como Chatbots, Assistentes Virtuais,
            Machine Learning (Visão/Imagem, NLP) e Serviços Cognitivos.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="01-2018 - 12-2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Analista Inteligencia Artificial/Full-stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture</h4>
            <p>
                Desenvolvendo Apps, sites, chatbots e agentes conversacionais.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11-2016 - 12-2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Front End Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture</h4>
            <p>
              Desenvolvimento de paginas e aplicativos hibridos.
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="07-2016 - 12-2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Ninja (Monitor de apoio)</h3>
            <h4 className="vertical-timeline-element-subtitle">Mastertech</h4>
            <p>
                Auxiliar de professores de programação, ajudando no desenvolvimento e apoio dos alunos
                em conteudos FrontEnd, BackEnd, desnvolvimento de conteudos em aulas.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11-2016 - 12-2017"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Geofísico sênior</h3>
            <h4 className="vertical-timeline-element-subtitle">Microsurvey</h4>
            <p>
            Gerenciamento e coordenação das frentes de trabalho,
            em aquisição geofisica de aerolevantamento. Controle de qualidade de dados
            adquiridos e relatórios para os clientes.
            </p>
          </VerticalTimelineElement>

</VerticalTimeline>


        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
