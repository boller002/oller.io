// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff"
    },
    primary: {
      main: "#000000"
    },
    text: {
      primary: "#000000",
      secondary: "#555555"
    }
  },
  typography: {
    fontFamily: "Menlo, Courier New, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 500
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 400
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 400
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6
    }
  }
});

export default theme;