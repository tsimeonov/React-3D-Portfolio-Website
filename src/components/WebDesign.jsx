import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import Chair from "./Chair";
import Mac from "./Mac";
import styled from "styled-components";

const Desc = styled.div``;

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
