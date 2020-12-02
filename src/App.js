import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Profile from "./Component/Pages/Profile";
import NavbarComponent from "./Component/NavbarComponent";
import Admin from "./Component/Pages/Admin";
import AddData from "./Component/Pages/AddData";

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin" component={Admin} />
          <Route path="/add" component={AddData} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
