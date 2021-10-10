import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createTheme, makeStyles } from '@material-ui/core/styles';
import Main from "./pages/Main.js";
import BaseLayout from "./layouts/BaseLayout.js";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Registration from "./pages/Registration.js";
import Goniometry from "./pages/Goniometry";
import SessionData from "./pages/SessionData";
import PatientsList from "./pages/PatientsList";
import AfterSession from "./pages/AfterSession.js";


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
        main: '#FF2400',
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
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/goniometry">
            <Goniometry />
          </Route>
          <Route path="/sessiondata">
            <SessionData />
          </Route>
          <Route path="/patients">
            <PatientsList />
          </Route>
          <Route path="/aftersession">
            <AfterSession />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;