import React from 'react';

class TopMessage extends React.Component {
  constructor(props){
    super(props);
    this.state = { topClass: "top-message-container" };
  }

  componentDidMount () {
    var that = this;
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var shrinkOn = 300;
        if (distanceY > shrinkOn)
          that.setState({ topClass: "top-message-container-hidden" });
    });
  }

  render () {
    return (
      <div className={this.state.topClass}>
        hello hola good day how are you cool.
      </div>
    )
  }
}

export default TopMessage;
