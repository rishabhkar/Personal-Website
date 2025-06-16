import React, { useRef, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaJava, FaPython, FaCloud, FaRobot, FaDatabase, FaReact, FaFigma, FaCss3Alt, FaHtml5, FaJenkins, FaLock, FaEye, FaRegChartBar } from 'react-icons/fa';
import { SiSpring, SiSap, SiGrafana, SiDynatrace, SiKibana, SiSonarqube, SiMysql } from 'react-icons/si';

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

const BgTransition = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 0;
  background: ${({ src, black }) =>
    black ? '#000' : `url(${src}) center/cover no-repeat`};
  opacity: ${({ black }) => (black ? 1 : 0.18)};
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
  background: rgba(24, 28, 39, 0.85);
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px) saturate(1.2);
  -webkit-backdrop-filter: blur(18px) saturate(1.2);
  border: 1.5px solid rgba(0, 255, 255, 0.18);
  padding: 3rem 2rem;
  margin: 2rem 0;
  max-width: 500px;
  min-width: 320px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1200px) {
    max-width: 1400px;
  }
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
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  color: #fff;
  letter-spacing: 1px;
  text-align: center;
  text-shadow: 0 0 16px #00eaff55, 0 2px 8px #000a, 0 0 32px #000c, 0 0 24px #0008;
`;

const CompanyBlock = styled(motion.div)`
  width: 100%;
  max-width: 700px;
  margin: 2.5rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.2rem;
`;

const CompanyLogo = styled.img`
  width: 117px;
  height: 117px;
  object-fit: contain;
  background: rgba(24,28,39,0.7);
  border-radius: 1.2rem;
  box-shadow: 0 0 16px #00eaff55, 0 0 0 2px #222;
  padding: 0.5rem;
  border: 2px solid #00eaff33;
`;

const CompanyName = styled.h3`
  font-size: 2.86rem;
  color: #00eaff;
  margin: 0;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 800;
  text-shadow: 0 0 16px #00eaff55, 0 2px 8px #000a, 0 8px 32px #000, 0 0 2px #000;
`;

const ProjectCard = styled(GlassCard)`
  max-width: 1200px;
  min-width: 320px;
  width: 98vw;
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
  text-align: justify;
  width: 100%;
`;

const BulletList = styled.ul`
  color: #b2eaff;
  font-size: 1.05rem;
  margin: 0 0 0 1.2rem;
  text-align: left;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  width: 100vw;
  max-width: 1600px;
  margin: 2.5rem auto;
  justify-items: center;
  align-items: stretch;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(24, 28, 39, 0.7);
  border-radius: 1.12rem;
  box-shadow: 0 4px 32px #00eaff33;
  padding: 1.31rem 1.05rem;
  min-height: 167px;
  min-width: 167px;
  width: 100%;
  max-width: 219px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s;
  font-size: 75%;
  &:hover {
    box-shadow: 0 8px 48px #00eaff77, 0 0 0 2px #00eaff44;
    transform: translateY(-6px) scale(1.03);
  }
`;

const SkillIcon = styled.div`
  font-size: 3.74rem;
  margin-bottom: 1.12rem;
  color: #00eaff;
  filter: drop-shadow(0 2px 8px #000a);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SkillName = styled.div`
  font-size: 1.57rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.53rem;
`;

const SkillDetail = styled.div`
  font-size: 0.86rem;
  color: #b2eaff;
  font-weight: 400;
  text-align: center;
  margin-top: 0.15rem;
`;

const ContactCard = styled(GlassCard)`
  max-width: 460px;
  min-width: 366px;
  width: 98vw;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 0 2px #000, 0 8px 48px #000c inset, 0 2px 24px #00eaff33;
`;

const ContactIcon = styled.div`
  font-size: 1.94rem;
  color: #00eaff;
  margin-bottom: 0.88rem;
`;

const ContactLink = styled.a`
  color: #00eaff;
  text-decoration: none;
  font-size: 0.97rem;
  margin-bottom: 0.62rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
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

const HomeGlassCard = styled(GlassCard)`
  max-width: 450px;
  width: 100vw;
  background: rgba(24, 28, 39, 0.45);
  margin-top: 3.5rem;
  font-size: 88%;
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingIdx, setPendingIdx] = useState(null);
  const sermasVideoRef = useRef(null);
  const [modalImg, setModalImg] = useState(null);

  // Custom background transition logic
  const handleBgChange = (idx) => {
    if (idx === bgIdx) return;
    setIsTransitioning(true);
    setPendingIdx(idx);
    setTimeout(() => {
      setBgIdx(idx);
      setTimeout(() => setIsTransitioning(false), 400);
    }, 400);
  };

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
    handleBgChange(found);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bgIdx]);

  useEffect(() => {
    const video = sermasVideoRef.current;
    if (!video) return;
    const handlePlay = (entries) => {
      if (entries[0].isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    };
    const observer = new window.IntersectionObserver(handlePlay, { threshold: 0.5 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleImgClick = (src, alt) => setModalImg({ src, alt });
  const closeModal = () => setModalImg(null);

  return (
    <>
      <GlobalStyle />
      {/* Custom background transition: fade out to black, then fade in next image */}
      <BgTransition
        key={isTransitioning ? 'black' : `img-${bgIdx}`}
        src={bgImages[isTransitioning ? bgIdx : bgIdx]}
        black={isTransitioning}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
      <Nav>
        <NavLink href="#home" onClick={e => { e.preventDefault(); scrollToSection(homeRef, handleBgChange, 0); }}>Home</NavLink>
        <NavLink href="#experience" onClick={e => { e.preventDefault(); scrollToSection(expRef, handleBgChange, 1); }}>Experience</NavLink>
        <NavLink href="#skills" onClick={e => { e.preventDefault(); scrollToSection(skillsRef, handleBgChange, 2); }}>Skills</NavLink>
        <NavLink href="#contact" onClick={e => { e.preventDefault(); scrollToSection(contactRef, handleBgChange, 3); }}>Contact</NavLink>
      </Nav>
      {/* Home Section */}
      <CenteredSection ref={homeRef} id="home">
        <HomeGlassCard
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
        </HomeGlassCard>
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
          <CompanyHeader>
            <CompanyLogo src="/assets/King's Logo.png" alt="King's College London Logo" />
            <CompanyName>King's College London</CompanyName>
          </CompanyHeader>
          <ProjectCard>
            <ProjectTitle>SERMAS Horizon</ProjectTitle>
            <ProjectDesc style={{ whiteSpace: 'pre-line', textAlign: 'left' }}>
{`
During my tenure as a Research Assistant at King's College London, starting October 2024, I've been deeply involved with the SERMAS project, an ambitious multi-university collaboration dedicated to enhancing the security and reliability of intelligent agent-based systems through formal verification methods.

My primary role revolves around the enhancement of system security and performance optimization. This journey started with re-engineering a previously Java and Python-based system, X-Men, initially developed for formal analysis and mutation testing of security ceremonies. This re-engineering significantly evolved the tool, resulting in the advanced X-Men 2.0.

X-Men is pivotal in automating the analysis and mutation of security ceremonies, crucial for exposing vulnerabilities in complex real-world scenarios involving human interactions. The upgraded tool now efficiently captures human-induced vulnerabilities and systematically generates mutations to test protocol robustness, significantly elevating its analytical power.

One of the key architectural advancements I contributed to was the introduction of a microservice-based structure using Java Spring Boot. This architectural shift enabled modularity, scalability, and independent service deployment. Specifically, the Mutation Generator service, central to the X-Men tool, was optimized to interface seamlessly with the Tamarin Prover, a prominent formal verification tool.

My responsibilities encompassed optimizing these microservices, reducing latency dramatically. Through meticulous optimization techniques and refactoring strategies, I managed to enhance the overall system response time by 35%. Moreover, by leveraging formal verification methodologies, the code complexity was effectively reduced by half, rendering the system more maintainable and comprehensible for future developers.

A significant aspect of this work included expanding the mutation capabilities of X-Men by introducing the Forget Mutation strategy. This extension notably increased the tool's robustness, making it capable of identifying vulnerabilities that arise from omitted or forgotten steps within security ceremonies, an important dimension in human-centric security scenarios.

Moreover, I authored comprehensive documentation and user manuals, simplifying adoption and usability. The documentation not only outlined technical instructions but also clearly articulated the theoretical foundations and practical use cases of X-Men 2.0. This documentation has significantly facilitated knowledge transfer within our international collaborative team.

Through practical case studies, including those of London's Oyster Card system and SAML-based Single Sign-On protocols, we successfully demonstrated X-Men's effectiveness. These studies underscored the real-world applicability of our tool, highlighting vulnerabilities such as user-induced errors in ticket validation and authentication simplifications that could lead to serious security breaches.

This project profoundly solidified my coding skills and bolstered my confidence in solving complex problems through software engineering and formal methods. It has been immensely rewarding to witness firsthand how software re-engineering and formal verification can concretely enhance system reliability and security.

As I concurrently pursue my Master's in Artificial Intelligence at King's College London, my involvement in the SERMAS project continuously enriches my academic insights, intertwining theoretical concepts with real-world applications. This experience has reinforced my passion for programming, evolving it from a professional responsibility into an enjoyable and fulfilling craft.
`}
            </ProjectDesc>
            {/* GIF/Video Placeholder */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
              <video
                ref={sermasVideoRef}
                src="/assets/X-Men Main Screen.mp4"
                width="864"
                height="486"
                style={{ borderRadius: '1rem', border: '2px solid #00eaff', background: '#222' }}
                controls
                muted
                autoPlay
                loop
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              <div style={{ color: '#b2eaff', fontSize: '1rem', marginTop: '0.7rem', textAlign: 'center' }}>
                Main screen of the application designed using Java Swing and Java FX.
              </div>
            </div>
            <ProjectDesc as="div" style={{ marginTop: '2rem', width: '100%' }}>
              <strong>Workflow Summary:</strong>
              <ol style={{ margin: '1rem 0 0 1.5rem', padding: 0 }}>
                <li>Project Inception:
                  <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
                    <li>Joined King's College London as Research Assistant in October 2024.</li>
                    <li>Joined SERMAS, a multi-university initiative focused on intelligent agent-based systems and formal verification.</li>
                  </ul>
                </li>
                <li>Initial Task:
                  <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
                    <li>Re-engineered the existing Java and Python-based system called X-Men.</li>
                    <li>Upgraded to X-Men 2.0, enhancing formal analysis and mutation testing capabilities.</li>
                  </ul>
                </li>
                <li>Architectural Improvements:
                  <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
                    <li>Shifted system to microservice architecture using Java Spring Boot.</li>
                    <li>Introduced Mutation Generator microservice for seamless integration with Tamarin Prover.</li>
                  </ul>
                </li>
                <li>System Optimization:
                  <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
                    <li>Reduced system response latency by 35%.</li>
                    <li>Reduced code complexity by 50% through formal verification methodologies and optimized refactoring.</li>
                  </ul>
                </li>
                <li>Mutation Capability Expansion:
                  <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
                    <li>Introduced Forget Mutation strategy to detect vulnerabilities from omitted or forgotten steps in security ceremonies.</li>
                  </ul>
                </li>
                <li>Documentation and Knowledge Transfer:
                  <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
                    <li>Authored comprehensive technical documentation and user manuals.</li>
                    <li>Facilitated international team collaboration and ease of tool adoption.</li>
                  </ul>
                </li>
                <li>Real-world Validation:
                  <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
                    <li>Conducted case studies on London's Oyster Card and SAML-based Single Sign-On protocols.</li>
                    <li>Demonstrated effectiveness of X-Men in identifying human-induced vulnerabilities and security flaws.</li>
                  </ul>
                </li>
                <li>Skill and Knowledge Development:
                  <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
                    <li>Enhanced coding proficiency and problem-solving capabilities.</li>
                    <li>Gained deep understanding and practical experience in software re-engineering and formal verification methods.</li>
                  </ul>
                </li>
                <li>Academic and Personal Growth:
                  <ul style={{ margin: 0, paddingLeft: '1.2em', listStyle: 'disc' }}>
                    <li>Concurrent pursuit of Master's in Artificial Intelligence at King's College London.</li>
                    <li>Integrated academic learning with real-world software engineering applications.</li>
                    <li>Reinforced passion and fulfillment in programming and formal methods.</li>
                  </ul>
                </li>
              </ol>
            </ProjectDesc>
          </ProjectCard>
        </CompanyBlock>
        {/* SAP */}
        <CompanyBlock
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1 }}
        >
          <CompanyHeader>
            <CompanyLogo src="/assets/SAP Logo.png" alt="SAP Logo" />
            <CompanyName>SAP</CompanyName>
          </CompanyHeader>
          <ProjectCard>
            <ProjectTitle>Buying 360 – Innovation in Procurement</ProjectTitle>
            <ProjectDesc as="div" style={{ marginBottom: '1.5rem', width: '100%' }}>
              <p>In August 2021, I embarked on an exciting journey with SAP, working on the Buying 360 (One Procurement) project. This groundbreaking initiative aimed to revolutionize procurement processes through next-generation digital innovation.</p>
              <p>Initially, my role involved leading the full-stack development of five high-performance microservices. Each service was meticulously crafted to handle intricate search aggregation tasks within an SAP eCommerce solution. Utilizing Java Spring Boot and Spring Security, I optimized the response time of these microservices to a remarkable 2 milliseconds, significantly enhancing system responsiveness.</p>
              <p>A major part of this challenge was developing robust and scalable APIs using SAP's advanced Cloud Application Programming (CAP) framework. My expertise in CAP enabled seamless integration and highly efficient processing, a critical element in managing procurement operations at scale.</p>
              <p>Security was a paramount concern for this project, given its complexity and the sensitive nature of procurement data. To address this, I implemented a novel cryptographic URL encryption technique. This advanced security measure drastically mitigated risks associated with Remote Code Execution (RCE) attacks, improving the overall product security posture by around 10%.</p>
              <p>Additionally, I was tasked with the development of the user interface using SAP's innovative Fiori Elements framework. Leveraging low-code/no-code annotation-based approaches, I created intuitive, highly interactive product configuration UIs. This effort alone boosted user engagement by approximately 30%, demonstrating the profound impact of thoughtful design on user satisfaction and operational efficiency.</p>
              <p>Beyond coding and development, my responsibilities extended to rigorous testing. Employing frameworks such as JUnit, Mockito, and MockWebServer, I ensured comprehensive test coverage that exceeded 95%. This meticulous approach not only ensured reliability but also aligned perfectly with SAP's strict quality and security guidelines.</p>
              <p>Throughout the project, collaboration was essential. I coordinated extensively across various cross-functional teams, including frontend developers, DevOps, and project managers. This collaborative effort was crucial to ensuring seamless integration, adherence to deadlines, and maintaining an innovative yet structured development environment.</p>
              <p>The success of Buying 360 did not go unnoticed. My contributions were recognized widely within SAP, validating my efforts and innovations in procurement technology. The project ultimately set a new benchmark for procurement systems, characterized by intelligent recommendations, personalized user experiences, and sustainable operational practices.</p>
            </ProjectDesc>
            {/* SAP Images with labels and responsive layout */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', margin: '1.5rem 0' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '660px', width: '100%' }}>
                <img src="/assets/SAP-1.jpg" alt="SAP-1: Procurement Workflow Page" style={{ width: '100%', maxWidth: '660px', borderRadius: '1rem', boxShadow: '0 2px 16px #00eaff33', objectFit: 'cover', cursor: 'pointer' }} onClick={() => handleImgClick('/assets/SAP-1.jpg', 'SAP-1: Procurement Workflow Page')} />
                <div style={{ color: '#b2eaff', fontSize: '0.98rem', marginTop: '0.5rem', textAlign: 'center' }}>SAP-1: Procurement Workflow Page</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '660px', width: '100%' }}>
                <img src="/assets/SAP-2.jpg" alt="SAP-2: Item Detail Page" style={{ width: '100%', maxWidth: '660px', borderRadius: '1rem', boxShadow: '0 2px 16px #00eaff33', objectFit: 'cover', cursor: 'pointer' }} onClick={() => handleImgClick('/assets/SAP-2.jpg', 'SAP-2: Item Detail Page')} />
                <div style={{ color: '#b2eaff', fontSize: '0.98rem', marginTop: '0.5rem', textAlign: 'center' }}>SAP-2: Item Detail Page</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '660px', width: '100%' }}>
                <img src="/assets/SAP-3.png" alt="SAP-3: Search Page" style={{ width: '100%', maxWidth: '660px', borderRadius: '1rem', boxShadow: '0 2px 16px #00eaff33', objectFit: 'cover', cursor: 'pointer' }} onClick={() => handleImgClick('/assets/SAP-3.png', 'SAP-3: Search Page')} />
                <div style={{ color: '#b2eaff', fontSize: '0.98rem', marginTop: '0.5rem', textAlign: 'center' }}>SAP-3: Search Page</div>
              </div>
            </div>
            {/* External Links for Buying 360 */}
            <div style={{ margin: '1rem 0 0 0', width: '100%' }}>
              <strong>Learn more:</strong>
              <ul style={{ margin: '0.5rem 0 0 1.2em', color: '#b2eaff', fontSize: '1rem' }}>
                <li><a href="https://medium.com/@socialmedia_39333/the-future-of-buying-next-gen-procurement-a63b07b7a75c" target="_blank" rel="noopener noreferrer">Buying 360 – Medium Article</a></li>
                <li><a href="http://cap.cloud.sap/docs/about/" target="_blank" rel="noopener noreferrer">CAP Framework Documentation</a></li>
                <li><a href="https://news.sap.com/2023/05/buying-360-capability-personalization-predictive-sustainable-recommendations/" target="_blank" rel="noopener noreferrer">SAP News: Buying 360 Capabilities</a></li>
              </ul>
            </div>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>CAP GPT</ProjectTitle>
            <ProjectDesc as="div" style={{ marginBottom: '1.5rem', width: '100%' }}>
              <p>In parallel to my work on Buying 360, I had the unique opportunity to engage in the CAP GPT research project from August 2021 to August 2024. This ambitious initiative sought to harness generative AI capabilities to transform the way SAP applications were developed and maintained.</p>
              <p>My role involved deep research into the integration of GPT (Generative Pre-trained Transformer) models within the SAP CAP framework. The goal was to automate various aspects of application development, significantly reducing manual coding efforts and accelerating overall delivery times.</p>
              <p>Initially, integrating sophisticated GPT models posed technical challenges. However, my consistent exploration and iterative experiments led to successful integrations, effectively automating the generation of complex business logic. The impact was remarkable, with development timelines reduced by up to 30%, fundamentally reshaping the development landscape at SAP.</p>
              <p>Beyond automation, CAP GPT enabled unprecedented innovation by generating code and solutions previously reliant on extensive human oversight. This breakthrough not only streamlined development processes but also introduced new possibilities for error reduction, consistency, and enhanced creativity within the development lifecycle.</p>
              <p>A critical aspect of my contribution was ensuring robust security and compliance standards. I meticulously validated all generative outputs using tools like Fortify and SonarQube, achieving zero unresolved vulnerabilities. This rigorous security-focused approach ensured the GPT-driven solutions were trustworthy and reliable for enterprise-grade applications.</p>
              <p>The successful integration of GPT models attracted significant attention from the SAP community, culminating in my work being showcased at numerous internal conferences and technical forums. Through these presentations, I demonstrated practical applications of generative AI, highlighting its transformative potential for enterprise software development.</p>
              <p>My leadership in this innovative project fostered strong cross-functional collaboration, driving consensus, and supporting a culture of continuous learning and innovation. My peers and supervisors acknowledged my proactive approach and my ability to lead complex AI-driven projects effectively.</p>
              <p>Ultimately, CAP GPT marked a pivotal shift in SAP's approach to development, paving the way for smarter, faster, and more efficient application lifecycles, directly aligning with SAP's commitment to continuous innovation and technological advancement.</p>
            </ProjectDesc>
            {/* External Links for CAP GPT */}
            <div style={{ margin: '1rem 0 0 0', width: '100%' }}>
              <strong>Learn more:</strong>
              <ul style={{ margin: '0.5rem 0 0 1.2em', color: '#b2eaff', fontSize: '1rem' }}>
                <li><a href="https://www.sap.com/assetdetail/2024/01/a44cc96b-a67e-0010-bca6-c68f7e60039b.html" target="_blank" rel="noopener noreferrer">SAP Official: CAP GPT</a></li>
                <li><a href="https://community.sap.com/t5/technology-blog-posts-by-members/cloud-application-programming-enhanced-with-generative-ai-from-sap-capgpt/ba-p/13548479" target="_blank" rel="noopener noreferrer">SAP Community: CAP GPT + Generative AI</a></li>
                <li><a href="https://github.com/mikezaschka/cap-ui5-gpt-chat" target="_blank" rel="noopener noreferrer">GitHub: CAP UI5 GPT Chat</a></li>
              </ul>
            </div>
          </ProjectCard>
        </CompanyBlock>
        {/* Tata Consultancy Services */}
        <CompanyBlock
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 }}
        >
          <CompanyHeader>
            <CompanyLogo src="/assets/TCS Logo.png" alt="TCS Logo" />
            <CompanyName>Tata Consultancy Services</CompanyName>
          </CompanyHeader>
          <ProjectCard>
            <ProjectTitle>e-Filing & Income Tax for Business Applications (ITBA), Income Tax Department of India</ProjectTitle>
            <ProjectDesc as="div" style={{ marginBottom: '1.5rem', width: '100%' }}>
              <p>From June 2019 to April 2021, I was employed at Tata Consultancy Services (TCS), primarily working on two critical projects: e-Filing and the Income Tax for Business Applications (ITBA). These projects were central to streamlining the tax filing processes and enhancing tax compliance mechanisms for India's Income Tax Department.</p>
              <p>My initial engagement involved the e-Filing platform, a pivotal government initiative to digitize the income tax filing process. This system enables taxpayers to electronically submit their tax returns and related documents to the government, significantly reducing paperwork, processing time, and enhancing transparency and efficiency.</p>
              <p>One specific responsibility was the development of the Black Money Evasion functionality, designed to help the Income Tax Department identify potential cases of tax evasion. This component was strategically crucial in enabling individuals to confidentially disclose previously undisclosed assets through a dedicated portal. It involved intricate data handling and robust validation mechanisms to ensure data accuracy, integrity, and confidentiality.</p>
              <p>Developing this feature required extensive use of Java, JavaScript, JSP, Struts2, and XML-based validation frameworks. I designed and implemented comprehensive rule-based validations to verify patterns within XML data during uploads. This functionality had the capacity to effectively handle up to 5000 requests per second, ensuring seamless user experience even during peak filing periods.</p>
              <p>In parallel, I also contributed significantly to the Income Tax for Business Applications (ITBA) project. ITBA was a comprehensive platform developed to support various tax-related administrative functions for businesses, streamlining interactions between corporate entities and tax authorities.</p>
              <p>My tasks within ITBA included developing secure and reliable post-login functionalities that allowed businesses to manage their tax profiles and submit essential documentation electronically. My role involved extensive coding in Java, employing frameworks like Struts2 and JSP, combined with JavaScript to enhance interactivity and user experience.</p>
              <p>Another critical aspect of my involvement was the integration of robust security measures. Given the sensitivity and confidentiality of tax-related data, stringent security protocols were mandatory. I meticulously implemented validation frameworks and security checks, ensuring protection against common vulnerabilities and unauthorized access attempts.</p>
              <p>Due to the national significance of these projects, collaboration was essential. I worked in a cross-functional team comprising approximately 200 professionals, coordinating closely with stakeholders from different functional areas including testing, DevOps, database management, and client-side representatives from the Income Tax Department.</p>
              <p>A significant challenge arose during the COVID-19 pandemic, when national lockdowns disrupted regular workflows. During this period, I adapted effectively to the sudden remote working environment, utilizing virtual desktop interfaces (VDI) within browser-based systems. Despite limited resources, I successfully maintained productivity and ensured timely delivery of critical functionalities.</p>
              <p>To manage complexity and tight deadlines, I prioritized tasks carefully, breaking down requirements into manageable segments and systematically addressing each aspect. This structured approach enabled me to successfully deliver high-quality outcomes within stringent timelines, demonstrating my capacity for effective time management and adaptability under pressure.</p>
              <p>Throughout these projects, I consistently applied rigorous testing methodologies to ensure reliability and performance. Comprehensive testing protocols were employed, involving multiple stages from unit tests to full integration testing, which effectively minimized bugs and ensured seamless deployments.</p>
              <p>My work on both the e-Filing and ITBA projects contributed significantly to enhancing operational efficiency and compliance capabilities for India's Income Tax Department. It provided users with a reliable, secure, and user-friendly digital interface, thereby streamlining processes and increasing compliance rates.</p>
              <p>This period at TCS was instrumental in my professional growth, significantly enhancing my technical skills, particularly in Java-based technologies, security implementations, and handling high-performance, high-availability systems. The experience deepened my understanding of large-scale governmental IT projects, emphasizing precision, security, and robust system design.</p>
            </ProjectDesc>
            <div style={{ margin: '1rem 0 0 0', width: '100%' }}>
              <strong>Learn more:</strong>
              <ul style={{ margin: '0.5rem 0 0 1.2em', color: '#b2eaff', fontSize: '1rem' }}>
                <li><a href="https://www.indiatoday.in/india/story/blackmoney-e-filing-link-to-declare-illegal-assets-launched-283690-2015-07-21" target="_blank" rel="noopener noreferrer">India Today: Black Money e-Filing</a></li>
                <li><a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1688038" target="_blank" rel="noopener noreferrer">PIB: e-Filing Press Release</a></li>
                <li><a href="https://corporatefinanceinstitute.com/resources/accounting/electronic-filing/#:~:text=Electronic%20filing%2C%20or%20e%2Dfiling,a%20minimum%20annual%20income%20cap." target="_blank" rel="noopener noreferrer">CFI: Electronic Filing Overview</a></li>
                <li><a href="https://itgoawbunit.org/pdf/446381995DCP_User%20Manual_for_Employee_v1.1.pdf" target="_blank" rel="noopener noreferrer">ITBA User Manual (PDF)</a></li>
              </ul>
            </div>
          </ProjectCard>
        </CompanyBlock>
        {/* ITC Limited */}
        <CompanyBlock
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3 }}
        >
          <CompanyHeader>
            <CompanyLogo src="/assets/ITC Logo.png" alt="ITC Logo" />
            <CompanyName>ITC Limited</CompanyName>
          </CompanyHeader>
          <ProjectCard>
            <ProjectTitle>Internship: Sales and Distribution of IT Systems using SAP ERP</ProjectTitle>
            <ProjectDesc as="div" style={{ marginBottom: '1.5rem', width: '100%' }}>
              <p>During June and July 2017, I undertook an internship at ITC Limited, a major Indian conglomerate with diverse operations spanning FMCG, hotels, paperboards and packaging, agri-business, and information technology. ITC, headquartered in Kolkata, has an extensive distribution network serving markets across India.</p>
              <p>My internship primarily involved working at ITC's wholesale distribution point, where I gained comprehensive insights into the sales and distribution processes utilized by the company. ITC leverages advanced technologies, including specialized software developed by Sify Technologies, to streamline their extensive wholesale distribution operations.</p>
              <p>The core component of ITC's distribution management was the Forum Central™ software, developed by Sify Technologies Limited. This software formed an integral part of ITC's Forward Supply Chain Management system. It was designed to facilitate real-time data exchange, transaction processing, and effective communication between wholesale distribution points and ITC's centralized database.</p>
              <p>One of my key responsibilities was analyzing and documenting the distribution workflow. I studied how sales representatives utilized a smart tablet interface known as "Vajra" to manage their daily orders. Vajra enabled representatives to efficiently capture market orders, record stock details, and synchronize this information directly to the central Sify database.</p>
              <p>I closely observed and documented the order-to-delivery lifecycle. This involved detailing the processes where sales representatives logged orders during their market visits, which were subsequently synchronized with the Sify software. These orders were then systematically billed by operators at the distribution point, generating detailed invoices and ensuring accuracy and efficiency.</p>
              <p>Additionally, I explored the operational mechanisms behind specialized sales processes such as Vanloading, which enabled rapid distribution of goods in response to immediate market demands. This system allowed distributors to swiftly load vans based on real-time order information, enhancing responsiveness and ensuring timely product delivery.</p>
              <p>During my internship, I also gained practical experience with billing processes. Operators generated two copies of each invoice: one for market delivery and another for internal record-keeping. I learned about various billing formats including half-page bills printed using dot matrix printers and full-page bills printed using laser printers, each optimized for efficiency and accuracy.</p>
              <p>I analyzed the role of detailed load charts provided to sales representatives, outlining exact product quantities and delivery destinations. These charts were crucial in streamlining daily delivery tasks and ensuring clear communication of responsibilities to sales teams.</p>
              <p>My analysis extended to understanding stock management protocols, particularly the mechanisms used for stock adjustment, physical stock reconciliation, and stock transfer activities. These functions ensured effective inventory management and minimized discrepancies between recorded and actual stock levels.</p>
              <p>I documented how ITC's distribution point managed product details and inventory adjustments via comprehensive software modules, covering areas such as product master management, party management, taxes and duties, and performance metrics. These modules were vital in maintaining accurate records and ensuring compliance with operational standards.</p>
              <p>The internship allowed me to interact closely with the distribution teams, providing insights into their operational challenges and efficiency enhancement strategies. By the conclusion of the internship, I had developed a clear understanding of the complexities involved in managing large-scale distribution networks, significantly enriching my practical knowledge of supply chain operations.</p>
              <p>Overall, my internship at ITC Limited offered valuable hands-on experience and deepened my appreciation for effective distribution management systems, preparing me well for future roles involving logistics, supply chain management, and enterprise software solutions.</p>
            </ProjectDesc>
            <div style={{ margin: '1rem 0 0 0', width: '100%' }}>
              <strong>Learn more:</strong>
              <ul style={{ margin: '0.5rem 0 0 1.2em', color: '#b2eaff', fontSize: '1rem' }}>
                <li><a href="https://www.linkedin.com/pulse/itc-limited-understanding-its-distribution-system-irshan-nayak/" target="_blank" rel="noopener noreferrer">ITC Limited: Understanding Its Distribution System</a></li>
                <li><a href="https://en.wikipedia.org/wiki/ITC_Limited" target="_blank" rel="noopener noreferrer">Wikipedia: ITC Limited</a></li>
              </ul>
            </div>
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
            <SkillIcon><FaJava /><FaPython style={{marginLeft:'0.7rem'}} /></SkillIcon>
            <SkillName>Programming Languages</SkillName>
            <SkillDetail>(Java, Python)</SkillDetail>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.1 }}>
            <SkillIcon><SiSpring /><FaCloud style={{marginLeft:'0.7rem'}} /></SkillIcon>
            <SkillName>Frameworks</SkillName>
            <SkillDetail>(Spring Boot, CAP)</SkillDetail>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.2 }}>
            <SkillIcon><SiSap /></SkillIcon>
            <SkillName>Deployment Environments</SkillName>
            <SkillDetail>(SAP BTP)</SkillDetail>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.3 }}>
            <SkillIcon><FaRobot /></SkillIcon>
            <SkillName>Artificial Intelligence</SkillName>
            <SkillDetail>(Neural Networks, Data Mining, Machine Learning)</SkillDetail>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.4 }}>
            <SkillIcon><FaFigma /><FaCss3Alt style={{marginLeft:'0.7rem'}} /><FaHtml5 style={{marginLeft:'0.7rem'}} /></SkillIcon>
            <SkillName>UI Design & Development</SkillName>
            <SkillDetail>(Fiori, Figma, CSS, HTML)</SkillDetail>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.5 }}>
            <SkillIcon><FaDatabase /><SiMysql style={{marginLeft:'0.7rem'}} /></SkillIcon>
            <SkillName>Databases</SkillName>
            <SkillDetail>(SQL, S/4 HANA)</SkillDetail>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.6 }}>
            <SkillIcon><FaJenkins /></SkillIcon>
            <SkillName>CI / CD</SkillName>
            <SkillDetail>(Jenkins)</SkillDetail>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.7 }}>
            <SkillIcon><SiGrafana /><SiDynatrace style={{marginLeft:'0.7rem'}} /><SiKibana style={{marginLeft:'0.7rem'}} /></SkillIcon>
            <SkillName>Monitoring</SkillName>
            <SkillDetail>(Grafana, Dynatrace, Kibana)</SkillDetail>
          </SkillCard>
          <SkillCard initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.8 }}>
            <SkillIcon><FaLock /><SiSonarqube style={{marginLeft:'0.7rem'}} /><FaRegChartBar style={{marginLeft:'0.7rem'}} /></SkillIcon>
            <SkillName>Security</SkillName>
            <SkillDetail>(Fortify, SonarQube, Mend)</SkillDetail>
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
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.05rem' }}>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.04rem', marginBottom: '0.22rem', textAlign: 'center' }}>Email</div>
            <ContactLink href="mailto:rishabh-kar@outlook.com"><FaEnvelope /> rishabh-kar@outlook.com</ContactLink>
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.05rem' }}>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.04rem', marginBottom: '0.22rem', textAlign: 'center' }}>LinkedIn</div>
            <ContactLink href="https://linkedin.com/in/rishabh-kar" target="_blank"><FaLinkedin /> linkedin.com/in/rishabh-kar</ContactLink>
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.05rem' }}>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.04rem', marginBottom: '0.22rem', textAlign: 'center' }}>Phone</div>
            <ContactLink href="tel:+447741545045"><FaEnvelope /> +44 7741 545045</ContactLink>
          </div>
        </ContactCard>
      </CenteredSection>
      {/* Modal for fullscreen image */}
      {modalImg && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(10,16,24,0.96)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={closeModal}>
          <img src={modalImg.src} alt={modalImg.alt} style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: '1.5rem', boxShadow: '0 4px 32px #00eaff77' }} />
          <div style={{ position: 'absolute', bottom: '3vh', left: 0, width: '100vw', color: '#b2eaff', fontSize: '1.2rem', textAlign: 'center', textShadow: '0 2px 8px #000a' }}>{modalImg.alt}</div>
          <span style={{ position: 'absolute', top: 24, right: 48, color: '#fff', fontSize: '2.5rem', cursor: 'pointer', fontWeight: 700, textShadow: '0 2px 8px #000a' }} onClick={closeModal}>&times;</span>
        </div>
      )}
    </>
  );
}
