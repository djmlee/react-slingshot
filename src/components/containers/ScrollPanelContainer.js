import React from 'react';
//import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import ScrollPanels from '../ScrollPanels';

export class ScrollPanelContainer extends React.Component {
  render() {
    return (
        <div>
            <h1>Suck on this {this.props.name}</h1> {/* Testing prop passing */}
            <ScrollPanels/> {/* Testing nesting component functions into ES6 class */}
        </div>
    );
  }
}
export default ScrollPanelContainer;