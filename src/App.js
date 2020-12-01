import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Profile from './Component/Pages/Profile';
import NavbarComponent from './Component/NavbarComponent';

function App() {
  return (
    <Router>
      <Switch>
        <NavbarComponent />
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;