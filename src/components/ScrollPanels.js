import React from 'react';
import '../styles/home-page.css';

const ScrollPanels = () => {
    return (
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
    );
};

export default ScrollPanels;