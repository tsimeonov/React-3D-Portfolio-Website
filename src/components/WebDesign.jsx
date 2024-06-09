import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import Chair from "./Chair";
import Mac from "./Mac";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Mac />
          {/* <Chair /> */}
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        We design products with a strong focus on both world cladd design and
        ensuring your product is a success.
      </Desc>
    </>
  );
};

export default WebDesign;
