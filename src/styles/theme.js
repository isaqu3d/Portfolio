import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  config: {
    initialColorMode: "dark",
  },

  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },

  colors: {
    background: {
      500: "#202023",
    },
    gray: {
      200: "#4A4A4D",
      300: "#525252",
      400: "#313134",
    },
    white: {
      50: "#E3E3E3",
      100: "#EEEEEE",
      200: "#CFCFCF",
    },
    pink: {
      300: "#FF63C3",
      400: "#CF55A1",
    },
  },

  blue: {
    300: "#73C9BE",
    400: "#4A746F",
  },

  styles: {
    global: {
      body: {
        bg: "background.500",
      },
    },
  },
};

export const theme = extendTheme(customTheme);
