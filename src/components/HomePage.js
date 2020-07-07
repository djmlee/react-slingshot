import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home-page.css';
import ScrollPanels from './ScrollPanels';
import ScrollPanelContainer from './containers/ScrollPanelContainer';

const HomePage = () => {
  return (
    <div className="hp-bg">
      <div>
      <h1 className="hp-header">Dimsum Reacts</h1>

      <h2>Dimsum Parlor</h2>
      <ol>
        <li>Review the <Link to="/fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
      </div>
      <ScrollPanelContainer name="dickhead"/>
    </div>
  );
};

export default HomePage;
