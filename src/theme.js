import { extendTheme } from "@chakra-ui/react";

const overrides = {
  colors: {
    primary: "#3DDABE",
    bg:"#DBDBDB",
    info: "#5555C9",
    success: "#1E853B",
    warning: "#EBB904",
    error: "#C42847",
    infoBg: "rgba(162, 162, 225, 0.25)",
    successBg: "rgba(49, 208, 170, 0.1)",
    errorBg: "rgba(196, 40, 71, 0.1)",
    warningBg: "rgba(252, 214, 80, 0.1)",
    hoverBg: "rgba(236, 241, 244, 0.1)",
    black: "#14141F",
    white: "#FFF",
   
  },

  fonts: {
    heading: "Bodoni Moda",
    body: "Work Sans",
  },

  
  initialColorMode: "light",
  useSystemColorMode: false,
};

export default extendTheme(overrides);
