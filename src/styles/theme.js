import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const customTheme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },

  styles: {
    global: (props) => ({
      body: {
        bg: mode("#f0e7db", "#202023")(props),
      },
    }),
  },

  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },

  components: {
    Heading: {
      variants: {
        "section-title": {
          textDecoration: "underline",
          fontSize: 20,
          textUnderlineOffset: 6,
          textDecorationColor: "#525252",
          textDecorationThickness: 4,
          marginTop: 3,
          marginBottom: 4,
        },
      },
    },
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
};

export const theme = extendTheme(customTheme);
