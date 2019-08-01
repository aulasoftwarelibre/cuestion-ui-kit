import * as React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

const params = {
  particles: {
    number: {
      value: 50
    },
    size: {
      value: 3
    },
    color: {
      value: "#cccccc"
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#cccccc",
      opacity: 0.4,
      width: 1
    }
  }
};

export const Background: React.FunctionComponent = () => <WrappedParticles params={params} />;

const WrappedParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  height: 98vh;
  width: 100%;
`;
