import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme, makeStyles } from '@material-ui/core/styles';
import Main from "./pages/Main.js";
import BaseLayout from "./layouts/BaseLayout.js";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Registration from "./pages/Registration.js";
import SessionInfo from "./pages/SessionInfo";

const useStyles = makeStyles({
  root: {

  },
});


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#17809F',
      },
      secondary: {
        main: '#c4c4c4',
      },
      background: {
        paper: 'C4C4C4',
      }
    },
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI',
    },
  });

  const classes = useStyles();
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <BaseLayout />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/regist">
            <Registration />
          </Route>
          <Route path="/session">
            <SessionInfo />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
