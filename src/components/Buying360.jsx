import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f4f6fb;
  padding: 4rem 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const Narrative = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const Visuals = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`;

const Visual = styled(motion.div)`
  width: 320px;
  height: 200px;
  background: #dde3ee;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
`;

const Caption = styled.span`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 0.95rem;
  color: #222;
  background: rgba(255,255,255,0.7);
  padding: 0.2rem 0;
`;

const Buying360 = () => (
  <Section>
    <Title>SAP Buying 360 – Innovation in Procurement</Title>
    <Narrative>
      SAP Buying 360 delivers next-generation procurement with personalization, predictive recommendations, and sustainability at its core. Leveraging AI and machine learning, it enhances user experience and procurement effectiveness, seamlessly integrating with SAP Ariba and SAP S/4HANA Cloud to streamline processes and drive value.<br /><br />
      <b>Sources:</b> <a href="https://news.sap.com/2023/05/buying-360-capability-personalization-predictive-sustainable-recommendations/" target="_blank" rel="noopener noreferrer">SAP News</a>, <a href="https://medium.com/@socialmedia_39333/the-future-of-buying-next-gen-procurement-a63b07b7a75c" target="_blank" rel="noopener noreferrer">Medium</a>
    </Narrative>
    <Visuals>
      <Visual
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Placeholder for Buying 360-1.jpg */}
        <Img src="/assets/Buying360-1.jpg" alt="Buying 360 Visual 1" />
        <Caption>Source: SAP News</Caption>
      </Visual>
      <Visual
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Placeholder for Buying 360-2.jpg */}
        <Img src="/assets/Buying360-2.jpg" alt="Buying 360 Visual 2" />
        <Caption>Source: SAP News</Caption>
      </Visual>
      <Visual
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Placeholder for Buying 360-3.png */}
        <Img src="/assets/Buying360-3.png" alt="Buying 360 Visual 3" />
        <Caption>Source: Medium</Caption>
      </Visual>
    </Visuals>
  </Section>
);

export default Buying360; 