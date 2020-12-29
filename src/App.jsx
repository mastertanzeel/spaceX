import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import ApolloProvider from "./graphql/apolloProvider";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function App() {
  const [darkState, setDarkState] = useState(false);
  const [open, setOpen] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? "#1f2533" : "#E5E5E5";
  const mainSecondaryColor = darkState ? "#5D30D7 " : "#8e24aa";
  const mainLinkColor = darkState ? "#5D30D7 " : "#8e24aa";
  const primaryTextColor = darkState ? "#F0ECE9" : "#000000";
  const bg = darkState ? "#000000" : "#FFFFFF";
  const secondaryTextColor = darkState ? "#E5E5E5" : "#E5E5E5";
  const hoverColor = darkState ? "#2c156b" : "#5e0b4c";
  const coverHeading = darkState ? "#bfbfbf" : "#ffffff";
  const coverText = darkState ? "#bfbfbf" : "#ffffff";
  const linkColor = darkState ? "#ffffff" : "#2c156b";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
        contrastText: primaryTextColor,
        light: bg,
      },
      secondary: {
        main: mainSecondaryColor,
        contrastText: secondaryTextColor,
        light: mainLinkColor,
      },
    },
    darkButton: {
      hoverColor: hoverColor,
    },
    coverPageText: {
      heading: coverHeading,
      text: coverText,
    },
    link: {
      color: linkColor,
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <ApolloProvider>
        <Navbar darkState={darkState} cb={handleThemeChange} />
        <Home />
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <MuiAlert onClose={handleClose} severity="info">
            {darkState ? "Activated dark mode" : "Activated light mode"}
          </MuiAlert>
        </Snackbar>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
