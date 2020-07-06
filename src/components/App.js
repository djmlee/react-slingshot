/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import AboutPage from "./AboutPage";
import FuelSavingsPage from "./containers/FuelSavingsPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import '../styles/app-styles.css';

// This is a className-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

className App extends React.Component {
  render() {
    const activeStyle = { color: 'red' };
    return (
      <div className="app-bg">
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
          {/* 
            Switch renders the first route that matches/includes the path 
            Router 
            Using <Router> would have render them all since "/fuel-savings" and "/about" both have /
            Source: https://dev.to/danhjoo7/using-a-switch-component-in-react-router-d2k
          */}

          {/* Demo Panels, feel free to delete */}
          <div className="panel" data-color="violet">
            <h2>Violet panel</h2>
          </div>
          <div className="panel" data-color="indigo">
            <h2>Indigo panel</h2>
          </div>
          <div className="panel" data-color="blue">
            <h2>Blue panel</h2>
          </div>
          <div className="panel" data-color="green">
            <h2>Green panel</h2>
          </div>
          <div className="panel" data-color="yellow">
            <h2>Yellow panel</h2>
          </div>
          <div className="panel" data-color="orange">
            <h2>Orange panel</h2>
          </div>
          <div className="panel" data-color="red">
            <h2>Red panel</h2>
          </div>
      </div>
      
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
