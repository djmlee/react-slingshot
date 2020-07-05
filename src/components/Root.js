import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router'; 
  /* 
    Synchronize router state with redux store through uni-directional flow (i.e. history -> store -> router -> components). 
    Supports functional component hot reloading while preserving state (with react-hot-reload).

    Takes function as arg & returns a "root reducer"
    Passing history into connectRouter adds router reducer into root reducer.
    https://github.com/supasate/connected-react-router
  */ 
import { Provider } from 'react-redux';
import App from './App';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
