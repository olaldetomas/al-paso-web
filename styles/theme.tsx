import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    g1: "#fafafa",
    g2: "#f4f4f5",
    g3: "#e4e4e7",
    g4: "#d4d4d8",
    g5: "#a1a1aa",
    g6: "#71717a",
    g7: "#52525b",
    g8: "#3f3f46",
    g9: "#27272a",
    g10: "#18181b",
    text: {
      primary: "#e5e7eb",
      secondary: "#9ca3af",
    },
    background: {
      main: "#F8F8F8",
      menu: "#ffffff",
    },
    message: {
      error: "#f21e1e",
      success: "#59ed5c",
    },
    primary: "#FEC93F",
  },
  rounded: {
    sm: "10px",
    md: "14px",
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  fontFamily: "Poppins",
};

export default theme;
