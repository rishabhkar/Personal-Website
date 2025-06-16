import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
  padding: 4rem 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
`;

const SkillCard = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #222;
`;

const ProgressBar = styled(motion.div)`
  width: 100%;
  height: 12px;
  background: #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const Progress = styled(motion.div)`
  height: 100%;
  border-radius: 6px;
`;

const skills = [
  { name: 'Cloud Application Programming (CAP)', level: 'Advanced', percent: 95 },
  { name: 'Business Technology Platform (BTP)', level: 'Advanced', percent: 90 },
  { name: 'Java', level: 'Intermediate', percent: 80 },
  { name: 'Spring Boot', level: 'Intermediate', percent: 80 },
  { name: 'Fiori Elements', level: 'Intermediate', percent: 75 },
  { name: 'Hibernate', level: 'Intermediate', percent: 70 },
  { name: 'SQL', level: 'Intermediate', percent: 70 },
  { name: 'SAP UI5', level: 'Beginner', percent: 40 },
  { name: 'Jenkins', level: 'Beginner', percent: 35 },
];

const getColor = (percent) => {
  if (percent >= 90) return '#4caf50';
  if (percent >= 70) return '#2196f3';
  if (percent >= 50) return '#ffc107';
  return '#f44336';
};

const Skills = () => (
  <Section>
    <Title>Technological Proficiency</Title>
    <SkillsGrid>
      {skills.map((skill, i) => (
        <SkillCard
          key={skill.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SkillName>{skill.name}</SkillName>
          <ProgressBar>
            <Progress
              style={{ background: getColor(skill.percent), width: `${skill.percent}%` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percent}%` }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </ProgressBar>
          <span>{skill.level}</span>
        </SkillCard>
      ))}
    </SkillsGrid>
  </Section>
);

export default Skills; 