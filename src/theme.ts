import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs2: true;
    sm1: true;
    sm2: true;
    md2: true;
    lg2: true;
  }
}
const theme = createTheme({
  palette: {
    background: {
      default: "#F1FAFB",
    },
    primary: {
      main: "#1B1A17",
    },
    secondary: {
      main: "#4A4DE7",
      light: "#7EA6F4",
    },
  },
  typography: {
    fontFamily: ["Inconsolata", "Arial"].join(","),
    fontSize: 16,
  },
});
theme.breakpoints.values = {
  xs: 0,
  xs2: 400,
  sm: 600,
  sm1: 700,
  sm2: 800,
  md: 900,
  md2: 1000,
  lg: 1200,
  lg2: 1300,
  xl: 1536,
};

theme.typography.h1 = {
  fontFamily: ["Inconsolata", "Arial"].join(","),
  fontWeight: "900",
  fontSize: "4rem",

  [theme.breakpoints.down("lg")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
};

export default theme;
