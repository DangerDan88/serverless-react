import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "../src/pages/Game";
import GameOver from "../src/pages/GameOver";
import Home from "../src/pages/Home";
import HighScores from "../src/pages/HighScores";
import NavBar from "../src/components/NavBar";
import { Container } from "./styled/Container";
import { Main } from "./styled/Main";
import Global from "./styled/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/styled/Themes";

function App() {
  const theme = "light";
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        {" "}
        <Global />
        <Main>
          <Container>
            <NavBar />
            <Switch>
              {/*   You have the home path last when using the switch so if all other routes fail will send them to final route which is home   */}
              <Route path="/game" component={Game} />
              <Route path="/highscores" component={HighScores} />
              <Route path="/gameover" component={GameOver} />
              <Route path="/home" component={Home} />
            </Switch>
          </Container>
        </Main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
