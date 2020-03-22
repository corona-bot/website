import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./screens/Home";
import Questionaire from "./screens/Questionaire";
import About from "./screens/About";
import coronaTheme from "./theme/corona";
import firebase from "./firebase";

const theme = createMuiTheme({
  ...coronaTheme
});

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user === null) {
      firebase.auth().signInAnonymously();
      firebase.auth().onAuthStateChanged(loggedInUser => {
        if (loggedInUser) {
          setUser(loggedInUser.uid);
        }
      });
    }
  }, [user]);

  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/questionaire">
              <Questionaire />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
