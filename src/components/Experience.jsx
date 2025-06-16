import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e9ecef;
  padding: 4rem 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const Intro = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 700px;
`;

const Bullet = styled(motion.li)`
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  color: #222;
  background: #fff;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

const bullets = [
  'Developed and led 5 high-performance microservices using Java Spring Boot and SAP\'s Cloud Application Programming (CAP) with <2ms response times.',
  'Implemented secure cryptographic URL encryption, significantly mitigating Remote Code Execution (RCE) risks by 10%.',
  'Engineered product configuration UI using SAP Fiori Elements, enhancing user engagement by 30%.',
  'Achieved over 95% code coverage using frameworks like JUnit, Mockito, and MockWebServer.',
  'Integrated GPT models into SAP\'s CAP framework, automating code generation and reducing development time by 30%.'
];

const Experience = () => (
  <Section>
    <Title>Professional Experience at SAP</Title>
    <Intro>
      I specialize in microservices, APIs, cryptographic URL encryption, UI design (Fiori Elements), and AI integration (GPT models).
    </Intro>
    <BulletList>
      {bullets.map((text, i) => (
        <Bullet
          key={i}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {text}
        </Bullet>
      ))}
    </BulletList>
  </Section>
);

export default Experience; 