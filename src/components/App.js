/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import AboutPage from "./AboutPage";
import FuelSavingsPage from "./containers/FuelSavingsPage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader"; //Documentation source: https://github.com/gaearon/react-hot-loader
import '../styles/app-styles.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  
  /* Experimental - Passing to Child Component */
  /*
  constructor(props) {
    super(props)

    //Bind the this context to handler function
    this.handler = this.handler.bind(this);

    //Set some state
    this.state = {
      messageShown: false
    };
  }
  */
  //This method will be sent to child component
  /*
  handler() {
    this.setState({
      messageShown: true
    })
  }
  */
  /* End of Experimental - Passing to Child Component */

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


        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
