import { createTheme } from "@mui/material/styles";

 export const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
      h1: {
        fontSize: "24px",
        fontWeight: 600,
      },
      subtitle2: {
        color: "#7B7B7B",
        lineHeight: "24px",
        fontSize: "16px",
        fontWeight: 400,
      },
      caption: {
        color: " #7B7B7B",
        fontSize: "16px",
        fontWeight: 500,
        
      },
    },
    palette: {
      primary: {
        main: "#9747FF",
      },
    },
  });