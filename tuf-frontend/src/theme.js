// theme.js
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primaryDark: {
      50: "#666666",
      100: "#5C5C5C",
      200: "#525252",
      300: "#474747",
      400: "#3D3D3D",
      500: "#333333",
      600: "#292929",
      700: "#141414",
      800: "#0a0a0a",
      900: "#000000",
    },
    primaryLight: {
      50: "#FFFFFF",
      100: "#F5F5F5",
      200: "#EBEBEB",
      300: "#E0E0E0",
      400: "#D6D6D6",
      500: "#CCCCCC",
      600: "#C2C2C2",
      700: "#B8B8B8",
      800: "#ADADAD",
      900: "#A3A3A3",
    },
    secondary: {
      50: "#EF8198",
      100: "#EC6F8A",
      200: "#EA5D7B",
      300: "#E84A6C",
      400: "#E5385E",
      500: "#E3264F",
      600: "#D91C45",
      700: "#B51739",
      800: "#90132E",
      900: "#6C0E22",
    },
    background: {
      light: "#f7f7f7",
      dark: "#1a1a1a",
    },
    text: {
      light: "#000000",
      dark: "#ffffff",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  components: {
    Input: {
      baseStyle: (props) => ({
        field: {
          color: props.colorMode === "light" ? "text.light" : "text.dark",
          backgroundColor:
            props.colorMode === "light"
              ? "background.light"
              : "background.dark",
          borderColor: props.colorMode === "light" ? "gray.300" : "gray.600",
          _focus: {
            borderColor: props.colorMode === "light" ? "blue.500" : "blue.300",
            boxShadow: "0 0 0 1px",
          },
        },
      }),
    },
    Textarea: {
      baseStyle: (props) => ({
        resize: "vertical",
        color: props.colorMode === "light" ? "text.light" : "text.dark",
        backgroundColor:
          props.colorMode === "light" ? "background.light" : "background.dark",
        borderColor: props.colorMode === "light" ? "gray.300" : "gray.600",
        _focus: {
          borderColor: props.colorMode === "light" ? "blue.500" : "blue.300",
          boxShadow: "0 0 0 1px",
        },
      }),
    },
  },
});

export default theme;
