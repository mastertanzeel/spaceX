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
  const mainPrimaryColor = darkState ? "#FE5E00" : "#44A9ED ";
  const mainSecondaryColor = darkState ? "#CF5A19" : "#33073C";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
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
