import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home-page.css';

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

        <div>
          {/* Demo Panels, feel free to delete */}
          <div className="panel color-violet">
            <h2>Violet panel</h2>
          </div>
          <div className="panel color-indigo">
            <h2>Indigo panel</h2>
          </div>
          <div className="panel color-blue">
            <h2>Blue panel</h2>
          </div>
          <div className="panel color-green">
            <h2>Green panel</h2>
          </div>
          <div className="panel color-yellow">
            <h2>Yellow panel</h2>
          </div>
          <div className="panel color-orange">
            <h2>Orange panel</h2>
          </div>
          <div className="panel color-red">
            <h2>Red panel</h2>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
