import React from 'react';
import { useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaJava, FaCloud, FaRobot, FaDatabase, FaReact } from 'react-icons/fa';

const profilePic = '/assets/profile.jpg';
const bgImages = [
  '/assets/bg1.jpg', // Home
  '/assets/bg2.jpg', // Experience
  '/assets/bg3.jpg', // Skills
  '/assets/bg4.jpg', // Contact
];

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Avenir+Next:wght@400;700&display=swap');
  body {
    background: #10131a;
    color: #f5f6fa;
    font-family: 'Avenir Next', 'Avenir', 'Inter', Helvetica, Arial, sans-serif;
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
    transition: background 0.6s;
  }
`;

const BgImage = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 0;
  background: ${({ src }) => `url(${src}) center/cover no-repeat`};
  opacity: 0.18;
  transition: background 0.8s;
`;

const CenteredSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  scroll-snap-align: start;
`;

const GlassCard = styled(motion.div)`
  background: rgba(24, 28, 39, 0.55);
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px) saturate(1.2);
  -webkit-backdrop-filter: blur(18px) saturate(1.2);
  border: 1.5px solid rgba(0, 255, 255, 0.18);
  padding: 3rem 2rem;
  margin: 2rem 0;
  max-width: 600px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  gap: 2rem;
  background: rgba(24, 28, 39, 0.7);
  border-radius: 2rem;
  padding: 0.75rem 2rem;
  box-shadow: 0 2px 16px 0 #00eaff33;
  backdrop-filter: blur(8px);
`;

const NavLink = styled.a`
  color: #f5f6fa;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  border-radius: 1rem;
  transition: background 0.2s, color 0.2s;
  &:hover, &:focus {
    background: #00eaff33;
    color: #00eaff;
  }
`;

const ProfileImg = styled(motion.img)`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #00eaff;
  box-shadow: 0 0 48px #00eaff55;
  margin-bottom: 2rem;
`;

const Headline = styled(motion.h1)`
  font-size: 3.2rem;
  font-weight: 800;
  margin: 0 0 1.2rem 0;
  letter-spacing: -2px;
  color: #fff;
  text-shadow: 0 0 8px #00eaff33;
`;

const Subheadline = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  color: #b2eaff;
  margin-bottom: 2.5rem;
`;

const Summary = styled(motion.p)`
  font-size: 1.25rem;
  color: #e0e6f7;
  max-width: 500px;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2.5rem;
  text-align: center;
  text-shadow: 0 0 16px #00eaff33;
`;

const CompanyBlock = styled(motion.div)`
  width: 100%;
  max-width: 700px;
  margin: 2.5rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompanyName = styled.h3`
  font-size: 1.7rem;
  color: #00eaff;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(24, 28, 39, 0.7);
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px #00eaff22;
  padding: 1.5rem 1.2rem;
  margin-bottom: 1.2rem;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTitle = styled.h4`
  font-size: 1.2rem;
  color: #fff;
  margin: 0 0 0.5rem 0;
  text-align: center;
`;

const ProjectDesc = styled.p`
  color: #e0e6f7;
  font-size: 1.05rem;
  margin: 0 0 0.5rem 0;
  text-align: center;
`;

const BulletList = styled.ul`
  color: #b2eaff;
  font-size: 1.05rem;
  margin: 0 0 0 1.2rem;
  text-align: left;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 700px;
  margin: 2rem 0;
`;

const SkillCard = styled(motion.div)`
  background: rgba(24, 28, 39, 0.7);
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px #00eaff22;
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.7rem;
  color: #00eaff;
`;

const SkillName = styled.div`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
`;

const ContactCard = styled(GlassCard)`
  max-width: 400px;
  margin-bottom: 4rem;
`;

const ContactIcon = styled.div`
  font-size: 2.2rem;
  color: #00eaff;
  margin-bottom: 1rem;
`;

const ContactLink = styled.a`
  color: #00eaff;
  text-decoration: none;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Placeholder = styled.div`
  color: #888;
  font-style: italic;
  margin: 1rem 0 0 0;
  text-align: center;
`;

const scrollToSection = (ref, setBgIdx, idx) => {
  if (ref.current) {
    setBgIdx(idx);
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function App() {
  const homeRef = useRef(null);
  const expRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [bgIdx, setBgIdx] = useState(0);

  // Section scroll handler for background image
  const handleScroll = () => {
    const sections = [homeRef, expRef, skillsRef, contactRef];
    const scrollY = window.scrollY;
    let found = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].current) {
        const top = sections[i].current.offsetTop - window.innerHeight / 2;
        if (scrollY >= top) found = i;
      }
    }
    setBgIdx(found);
  };

  // Attach scroll event
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <GlobalStyle />
      <AnimatePresence mode="wait">
        <BgImage
          key={bgIdx}
          src={bgImages[bgIdx]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      <Nav>
        <NavLink href="#home" onClick={e => { e.preventDefault(); scrollToSection(homeRef, setBgIdx, 0); }}>Home</NavLink>
        <NavLink href="#experience" onClick={e => { e.preventDefault(); scrollToSection(expRef, setBgIdx, 1); }}>Experience</NavLink>
        <NavLink href="#skills" onClick={e => { e.preventDefault(); scrollToSection(skillsRef, setBgIdx, 2); }}>Skills</NavLink>
        <NavLink href="#contact" onClick={e => { e.preventDefault(); scrollToSection(contactRef, setBgIdx, 3); }}>Contact</NavLink>
      </Nav>
      {/* Home Section */}
      <CenteredSection ref={homeRef} id="home">
        <GlassCard
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <ProfileImg
            src={profilePic}
            alt="Rishabh Kar profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />
          <Headline
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Rishabh Kar
          </Headline>
          <Subheadline
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Developer & AI Enthusiast
          </Subheadline>
          <Summary
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            {/* TODO: Replace with your story/cover letter summary */}
            Passionate about building intelligent, scalable solutions at the intersection of SAP, cloud, and AI. Experienced in leading high-impact projects and driving innovation in enterprise technology.
          </Summary>
        </GlassCard>
      </CenteredSection>
      {/* Experience Section */}
      <CenteredSection ref={expRef} id="experience">
        <SectionTitle
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >Professional Experience</SectionTitle>
        {/* King's College London */}
        <CompanyBlock
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
        >
          <CompanyName>King's College London</CompanyName>
          <ProjectCard>
            <ProjectTitle>SERMAS Horizon</ProjectTitle>
            <Placeholder>Details coming soon...</Placeholder>
          </ProjectCard>
        </CompanyBlock>
        {/* SAP */}
        <CompanyBlock
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1 }}
        >
          <CompanyName>SAP</CompanyName>
          <ProjectCard>
            <ProjectTitle>Buying 360 – Innovation in Procurement</ProjectTitle>
            <ProjectDesc>
              Buying 360 is SAP's next-generation procurement platform, delivering personalized, predictive, and sustainable procurement experiences. Leveraging AI and machine learning, it integrates with SAP Ariba and SAP S/4HANA Cloud to streamline procurement and drive business value.
            </ProjectDesc>
            <BulletList>
              <li>Developed and led 5 high-performance microservices using Java Spring Boot and SAP's Cloud Application Programming (CAP) with &lt;2ms response times.</li>
              <li>Implemented secure cryptographic URL encryption, significantly mitigating Remote Code Execution (RCE) risks by 10%.</li>
              <li>Engineered product configuration UI using SAP Fiori Elements, enhancing user engagement by 30%.</li>
              <li>Achieved over 95% code coverage using frameworks like JUnit, Mockito, and MockWebServer.</li>
              <li>Integrated GPT models into SAP's CAP framework, automating code generation and reducing development time by 30%.</li>
            </BulletList>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>CAP GPT</ProjectTitle>
            <ProjectDesc>
              Integrated OpenAI GPT models into SAP's Cloud Application Programming (CAP) framework, automating code generation and reducing development time by 30%.
            </ProjectDesc>
            <BulletList>
              <li>Automated code scaffolding and documentation for SAP microservices.</li>
              <li>Enabled natural language-driven development for SAP CAP projects.</li>
            </BulletList>
          </ProjectCard>
        </CompanyBlock>
        {/* Tata Consultancy Services */}
        <CompanyBlock
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 }}
        >
          <CompanyName>Tata Consultancy Services</CompanyName>
          <ProjectCard>
            <ProjectTitle>e-Filing, Income Tax Department of India</ProjectTitle>
            <Placeholder>Details coming soon...</Placeholder>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Income Tax for Business Applications (ITBA)</ProjectTitle>
            <Placeholder>Details coming soon...</Placeholder>
          </ProjectCard>
        </CompanyBlock>
        {/* ITC Limited */}
        <CompanyBlock
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3 }}
        >
          <CompanyName>ITC Limited</CompanyName>
          <ProjectCard>
            <ProjectTitle>Internship: Sales and Distribution of IT Systems using SAP ERP</ProjectTitle>
            <Placeholder>Details coming soon...</Placeholder>
          </ProjectCard>
        </CompanyBlock>
      </CenteredSection>
      {/* Skills Section */}
      <CenteredSection ref={skillsRef} id="skills">
        <SectionTitle
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >Skills & Technologies</SectionTitle>
        <SkillsGrid>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1 }}>
            <SkillIcon><FaCloud /></SkillIcon>
            <SkillName>Cloud Application Programming (CAP)</SkillName>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.1 }}>
            <SkillIcon><FaJava /></SkillIcon>
            <SkillName>Java Spring Boot</SkillName>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.2 }}>
            <SkillIcon><FaDatabase /></SkillIcon>
            <SkillName>SAP BTP</SkillName>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.3 }}>
            <SkillIcon><FaRobot /></SkillIcon>
            <SkillName>AI Integration (GPT, ML)</SkillName>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.4 }}>
            <SkillIcon><FaReact /></SkillIcon>
            <SkillName>UI Design (Fiori Elements, React)</SkillName>
          </SkillCard>
        </SkillsGrid>
      </CenteredSection>
      {/* Contact Section */}
      <CenteredSection ref={contactRef} id="contact">
        <SectionTitle
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >Contact</SectionTitle>
        <ContactCard
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <ContactIcon><FaEnvelope /></ContactIcon>
          <ContactLink href="mailto:rishabh-kar@outlook.com"><FaEnvelope /> rishabh-kar@outlook.com</ContactLink>
          <ContactLink href="https://linkedin.com/in/rishabh-kar" target="_blank"><FaLinkedin /> linkedin.com/in/rishabh-kar</ContactLink>
          <ContactLink href="https://github.com/rishabhkar" target="_blank"><FaGithub /> github.com/rishabhkar</ContactLink>
        </ContactCard>
      </CenteredSection>
    </>
  );
}
