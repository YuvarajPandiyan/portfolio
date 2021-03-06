import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import App from "./App";

const breakpoints = createBreakpoints({
  sm: "200px",
  md: "460px",
  lg: "750px",
  xl: "1200px",
  "2xl": "1920px",
});
// 3. Extend the theme
const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: "Yanone Kaffeesatz",
    body: "Poppins",
  },
  colors: {
    button: {
      500: "linear-gradient(76deg, #450EFF 0%, #9A17F7 62%, #A618F6 100%)",
      600: "linear-gradient(76deg, #6747d3 0%, #b358f4 62%, #a723f1 100%)",
    },
    button_1: {
      500: "#450EFF",
      600: "#592fe4",
    },
  },
});
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
