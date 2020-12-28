import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import ApolloProvider from "./graphql/apolloProvider";
import { BrowserRouter, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";

function App() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? "#1A202C" : "#E5E5E5";
  const mainSecondaryColor = darkState ? "#5D30D7 " : "#8e24aa";
  const mainLinkColor = darkState ? "#5D30D7 " : "#8e24aa";
  const primaryTextColor = darkState ? "#F0ECE9" : "#000000";
  const bg = darkState ? "#000000" : "#FFFFFF";
  const secondaryTextColor = darkState ? "#E5E5E5" : "#E5E5E5";
  const hoverColor = darkState ? "#2c156b" : "#5e0b4c";

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
      hoverColor: hoverColor
    }
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <ApolloProvider>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Switch checked={darkState} onChange={handleThemeChange} />
        </ApolloProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
