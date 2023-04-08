import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Spendings from "./Spendings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/spendings">
            <Spendings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
