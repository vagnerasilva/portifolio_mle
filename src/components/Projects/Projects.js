import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Projects.css';
import {
  SiPython,
} from "react-icons/si";

function Projects() {
  // Cores do tema alternadas para visual mais interessante
  const timelineColors = [
    { bg: '#623686', border: '#be50f4', shadow: 'rgba(98, 54, 134, 0.5)' },
    { bg: '#8a49a8', border: '#c770f0', shadow: 'rgba(198, 112, 240, 0.3)' },
  ];

  const getColorByIndex = (index) => timelineColors[index % timelineColors.length];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Minha Timeline <strong className="purple">profissional </strong>
        </h1>
        <p style={{ color: "white" }}>
          Uma pequena visão das minhas experiências de trabalho no formato timeline.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-element-custom"
            contentStyle={{ 
              background: getColorByIndex(0).bg, 
              color: '#fff',
              boxShadow: `0 4px 10px ${getColorByIndex(0).shadow}`
            }}
            contentArrowStyle={{ borderRight: `7px solid ${getColorByIndex(0).bg}` }}
            date="07/2021 - Até o momento"
            dateClassName="timeline-date"
            iconStyle={{ 
              background: getColorByIndex(0).bg, 
              color: '#fff',
              boxShadow: `0 0 0 4px rgba(199, 112, 240, 0.3)`,
              border: `2px solid ${getColorByIndex(0).border}`
            }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">ITAU</h4>
            <p>
              Desenvolvendo Plataformas e ferramentas MLOPS para os times de Data Science.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-element-custom"
            contentStyle={{ 
              background: getColorByIndex(1).bg,
              color: '#fff',
              boxShadow: `0 4px 10px ${getColorByIndex(1).shadow}`
            }}
            contentArrowStyle={{ borderRight: `7px solid ${getColorByIndex(1).bg}` }}
            date="01-2020 - 07-2021"
            dateClassName="timeline-date"
            iconStyle={{ 
              background: getColorByIndex(1).bg, 
              color: '#fff',
              boxShadow: `0 0 0 4px rgba(199, 112, 240, 0.3)`,
              border: `2px solid ${getColorByIndex(1).border}`
            }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Consultor Inteligência Artificial / Machine Learning Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture</h4>
            <p>
            Consultor de IA no desenvolvimento e implantação de soluções,
            como Chatbots, Assistentes Virtuais,
            Machine Learning (Visão/Imagem, NLP) e Serviços Cognitivos.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-element-custom"
            contentStyle={{ 
              background: getColorByIndex(0).bg,
              color: '#fff',
              boxShadow: `0 4px 10px ${getColorByIndex(0).shadow}`
            }}
            contentArrowStyle={{ borderRight: `7px solid ${getColorByIndex(0).bg}` }}
            date="01-2018 - 12-2019"
            dateClassName="timeline-date"
            iconStyle={{ 
              background: getColorByIndex(0).bg, 
              color: '#fff',
              boxShadow: `0 0 0 4px rgba(199, 112, 240, 0.3)`,
              border: `2px solid ${getColorByIndex(0).border}`
            }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Analista Inteligência Artificial/Full-stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture</h4>
            <p>
                Desenvolvendo Apps, sites, chatbots e agentes conversacionais.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-element-custom"
            contentStyle={{ 
              background: getColorByIndex(1).bg,
              color: '#fff',
              boxShadow: `0 4px 10px ${getColorByIndex(1).shadow}`
            }}
            contentArrowStyle={{ borderRight: `7px solid ${getColorByIndex(1).bg}` }}
            date="11-2016 - 12-2017"
            dateClassName="timeline-date"
            iconStyle={{ 
              background: getColorByIndex(1).bg, 
              color: '#fff',
              boxShadow: `0 0 0 4px rgba(199, 112, 240, 0.3)`,
              border: `2px solid ${getColorByIndex(1).border}`
            }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Front End Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accenture</h4>
            <p>
              Desenvolvimento de páginas e aplicativos hibridos.
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-element-custom"
            contentStyle={{ 
              background: getColorByIndex(0).bg,
              color: '#fff',
              boxShadow: `0 4px 10px ${getColorByIndex(0).shadow}`
            }}
            contentArrowStyle={{ borderRight: `7px solid ${getColorByIndex(0).bg}` }}
            date="07-2016 - 12-2018"
            dateClassName="timeline-date"
            iconStyle={{ 
              background: getColorByIndex(0).bg, 
              color: '#fff',
              boxShadow: `0 0 0 4px rgba(199, 112, 240, 0.3)`,
              border: `2px solid ${getColorByIndex(0).border}`
            }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Ninja (Monitor de apoio)</h3>
            <h4 className="vertical-timeline-element-subtitle">Mastertech</h4>
            <p>
                Auxiliar de professores de programação, ajudando no desenvolvimento e apoio dos alunos
                em conteúdos FrontEnd, BackEnd, desenvolvimento de conteúdos em aulas.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-element-custom"
            contentStyle={{ 
              background: getColorByIndex(1).bg,
              color: '#fff',
              boxShadow: `0 4px 10px ${getColorByIndex(1).shadow}`
            }}
            contentArrowStyle={{ borderRight: `7px solid ${getColorByIndex(1).bg}` }}
            date="11-2016 - 12-2017"
            dateClassName="timeline-date"
            iconStyle={{ 
              background: getColorByIndex(1).bg, 
              color: '#fff',
              boxShadow: `0 0 0 4px rgba(199, 112, 240, 0.3)`,
              border: `2px solid ${getColorByIndex(1).border}`
            }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Ninja (Monitor de apoio)</h3>
            <h4 className="vertical-timeline-element-subtitle">Mastertech</h4>
            <p>
                Auxiliar de professores de programação, ajudando no desenvolvimento e apoio dos alunos
                em conteúdos FrontEnd, BackEnd, desenvolvimento de conteúdos em aulas.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-element-custom"
            contentStyle={{ 
              background: getColorByIndex(0).bg,
              color: '#fff',
              boxShadow: `0 4px 10px ${getColorByIndex(0).shadow}`
            }}
            contentArrowStyle={{ borderRight: `7px solid ${getColorByIndex(0).bg}` }}
            date="11-2016 - 12-2017"
            dateClassName="timeline-date"
            iconStyle={{ 
              background: getColorByIndex(0).bg, 
              color: '#fff',
              boxShadow: `0 0 0 4px rgba(199, 112, 240, 0.3)`,
              border: `2px solid ${getColorByIndex(0).border}`
            }}
            icon={<SiPython />}
          >
            <h3 className="vertical-timeline-element-title">Geofísico sênior</h3>
            <h4 className="vertical-timeline-element-subtitle">Microsurvey</h4>
            <p>
            Gerenciamento e coordenação das frentes de trabalho,
            em aquisição geofísica de aerolevantamento. Controle de qualidade de dados
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
