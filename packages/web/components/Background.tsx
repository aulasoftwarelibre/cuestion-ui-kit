import * as React from "react";
import Particles from "react-particles-js";

const params = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 3,
    },
    color: {
      value: "#cccccc",
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#cccccc",
      opacity: 0.4,
      width: 1,
    },
  },
};

const styles = {
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -10,
  height: "98vh",
  width: "100%",
};

export const Background: React.FunctionComponent = () => (
  <Particles style={styles} params={params} />
);
