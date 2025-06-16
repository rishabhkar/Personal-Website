import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  padding: 4rem 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 2.5rem 2rem;
`;

const Link = styled.a`
  color: #1976d2;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.2s;
  &:hover {
    color: #0d47a1;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const Icon = styled(motion.img)`
  width: 36px;
  height: 36px;
  filter: grayscale(1) brightness(0.7);
  transition: filter 0.2s;
  &:hover {
    filter: grayscale(0) brightness(1);
  }
`;

const Contact = () => (
  <Section>
    <Title>Connect With Me</Title>
    <Info>
      <div>Email: <Link href="mailto:rishabh-kar@outlook.com">rishabh-kar@outlook.com</Link></div>
      <div>Phone: <Link href="tel:+447741545045">+44 7741 545045</Link></div>
      <div>LinkedIn: <Link href="https://www.linkedin.com/in/rishabh-kar/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rishabh-kar</Link></div>
      <Socials>
        {/* Replace with your own icons if desired */}
        <Link href="mailto:rishabh-kar@outlook.com"><Icon src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftoutlook.svg" alt="Email" whileHover={{ scale: 1.2 }} /></Link>
        <Link href="https://www.linkedin.com/in/rishabh-kar/" target="_blank" rel="noopener noreferrer"><Icon src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" whileHover={{ scale: 1.2 }} /></Link>
      </Socials>
    </Info>
  </Section>
);

export default Contact; 