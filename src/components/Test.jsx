import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  scroll-snap-align: center;
`;

export const Test = () => {
  return;

  <Container>
    <Canvas>
      <mesh>
        <boxGeometry args={[5, 5, 5]} />
      </mesh>
    </Canvas>
  </Container>;
};

export default Test;
