import { createMuiTheme } from "@material-ui/core/styles";

const themePrimary = "#108DAA";
const themeAqua = "#8AC5CC";
const themeText = "#292D36";
//
// const textGrey = '#4d4d4d'
// const green = '#009900'
// const error = '#ff3333'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: { main: themePrimary },
    custom: {
      aqua: themeAqua,
    },
  },
  typography: {
    h1: {
      color: themeText,
      fontFamily: "Nunito",
      fontWeight: "bold",
      fontSize: "40px",
      lineHeight: "140%",
    },
    h2: {
      color: themeText,
      fontFamily: "Nunito",
      fontWeight: "bold",
      fontSize: "36px",
      lineHeight: "140%",
    },
    h3: {
      color: themeText,
      fontFamily: "Montserrat",
      fontSize: "18px",
      lineHeight: "160%",
    },
    h4: {
      color: themeText,
      fontFamily: "Montserrat",
      fontSize: "22px",
      fontWeight: 600,
      lineHeight: "160%",
    },

    h6: {
      color: "#666666",
      fontFamily: "Nunito",
      fontSize: "18px",
      lineHeight: "160%",
    },
    subtitle1: {
      color: themeText,
      fontFamily: "Nunito",
      fontSize: "16px",
      lineHeight: "140%",
    },
  },
  overrides: {
    MuiRating: {
      root: {
        color: themePrimary,
      },
    },
  },
});

export default theme;
