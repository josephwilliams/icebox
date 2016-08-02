import React from 'react';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal';
import AuthModal from './authModal/authModal';
import ModalStyle from './authModal/authModalStyle.js';

const splashHeader = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return({ headerClass: "splash-header-container", modalIsOpen: false, modalAuthType: true });
  },

  linkTo: function (address) {
    return () => {this.context.router.push(address)};
  },

  toggleAuthModal: function (authType) {
    this.setState({ modalAuthType: authType });

    let newModalState = !this.state.modalIsOpen;
    this.setState({ modalIsOpen: newModalState });

    if (this.state.modalIsOpen)
      ModalStyle.content.opacity = '0';
  },

  onModalOpen: function () {
    ModalStyle.content.opacity = '1';
  },

  componentDidMount: function () {
    var that = this;
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        var shrinkOn = 1;
        if (distanceY > shrinkOn) {
            that.setState({ headerClass: "splash-header-container-scroll"});
        } else {
            that.setState({ headerClass: "splash-header-container"});
        }
    });
  },

  render: function() {
    var nodeModal = null;
    if (this.state.modalIsOpen) {
      nodeModal = (
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleAuthModal}
          onAfterOpen={this.onModalOpen}
          style={ModalStyle}
         >
          <AuthModal authType={this.state.modalAuthType}
                     toggleAuthModal={this.toggleAuthModal}/>
        </Modal>
      )
    }

    return (
      <div className={this.state.headerClass}>
        {nodeModal}
        <div className="splash-header-content">
          <div className="splash-header-left">
            <div className="splash-header-link" onClick={this.linkTo("search")}>
              search
            </div>
            <div className="splash-header-link" onClick={this.linkTo("beers")}>
              beers
            </div>
            <div className="splash-header-link" onClick={this.linkTo("breweries")}>
              breweries
            </div>
          </div>
          <div className="splash-header-center" onClick={this.linkTo("splash")}>
              <img src="http://www.clker.com/cliparts/5/9/5/1/13179180341098624364beer%20bing.jpg"></img>
              <h1>icebox</h1>
          </div>
          <div className="splash-header-right">
            <div className="splash-header-link" onClick={() => this.toggleAuthModal(false)}>
              login
            </div>
            <div className="splash-header-link" onClick={() => this.toggleAuthModal(true)}>
              signup
            </div>
            <div className="splash-header-icons-container">
              <FontAwesome name="fa fa-twitter" />
              <FontAwesome name="fa fa-facebook-square" />
              <FontAwesome name="fa fa-github" />
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = splashHeader;
