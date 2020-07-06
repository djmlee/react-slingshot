import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home-page.css';

const HomePage = () => {
  return (
    <div className="hp-bg">
      <div>
      <h1 className="hp-header">React Slingshot</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="/fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
      </div>
    </div>
  );
};

export default HomePage;
