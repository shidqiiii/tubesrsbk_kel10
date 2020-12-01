import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Profile from "./Component/Pages/Profile";
import NavbarComponent from "./Component/NavbarComponent";

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
