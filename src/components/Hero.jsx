import React from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>Hero</Container>
    </Section>
  );
};

export default Hero;
