import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Parallax } from 'react-parallax';
// https://www.npmjs.com/package/react-parallax

//sub-components
import SplashHeader from './splashHeader';
import SplashMiddle from './splashMiddle';
import SplashContent from './splashContent';
import SplashFooter from './splashFooter';

const Splash = React.createClass({
  render: function() {
    return (
      <div className="splash-background">
        <Parallax bgImage="images/bernal_heights_bg.png"
                  strength={400}
                  blur={0}
                  bgWidth={"100vw"}
                  bgHeight={"55%"}
                  className={"splash-parallax-image"}
                  top={"400"}>
          <div className="splash-container">
            <SplashHeader />
            <SplashMiddle />
            <SplashContent />
            <SplashFooter />
          </div>
        </Parallax>
      </div>
    );
  }

});

module.exports = Splash;
