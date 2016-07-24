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
        <Parallax bgImage="http://live2eat.typepad.com/.a/6a014e8968623c970d017d42a40c16970c-pi"
                  strength={400}
                  blur={2}
                  bgWidth={"100vw"}
                  bgHeight={"75%"}
                  className={"splash-parallax-image"}>
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
