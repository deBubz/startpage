import { createMuiTheme } from "@material-ui/core/styles";

/* 
    global material ui theme
*/

const Theme = createMuiTheme({
  typography: {
    fontSize: 18,
  },
  spacing: 16,
  colors: {
    offWhite: "#fafffc",
    mainBorder: "#b9c7a7",
    black: "#71543d",
  },
});

export default Theme;
