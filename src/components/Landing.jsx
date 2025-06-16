import { motion } from 'framer-motion';
import styled from 'styled-components';

const LandingSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #f5f7fa;
  overflow: hidden;
`;

const BackgroundPlaceholder = styled.div`
  position: absolute;
  inset: 0;
  background: url(${import.meta.env.BASE_URL}assets/Buying360-1.jpg) center/cover no-repeat;
  opacity: 0.25;
  z-index: 0;
  /* TODO: Replace with your own background image */
`;

const Headline = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  z-index: 1;
  color: #1a1a1a;
  text-align: center;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1.5rem 0 0 0;
  z-index: 1;
  color: #444;
  text-align: center;
`;

const Landing = () => (
  <LandingSection>
    <BackgroundPlaceholder />
    <Headline
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Rishabh Kar - Developer & AI Enthusiast
    </Headline>
    <Subtitle
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Specializing in SAP & Intelligent Technologies
    </Subtitle>
  </LandingSection>
);

export default Landing; 