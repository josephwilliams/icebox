import React from 'react';
import FontAwesome from 'react-fontawesome';

//sub-components
import SplashMiddle from './splashMiddle';
import SplashContent from './splashContent';

const Splash = () => (
  <div className="splash-container">
    <SplashMiddle />
    <SplashContent />
  </div>
);

module.exports = Splash;
