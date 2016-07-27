import React from 'react';
import FontAwesome from 'react-fontawesome';
// import Modal from 'react-modal-component';
import Modal, {closeStyle} from 'simple-react-modal';
import AuthModal from './authModal';

const splashHeader = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return({ modalIsOpen: false });
  },

  linkTo: function (address) {
    return () => {this.context.router.push(address)};
  },

  componentDidMount: function () {
    window.addEventListener('keydown', this.handleKeyDown);
  },

  componentWillUnmount: function () {
    window.removeEventListener('keydown', this.handleKeyDown);
  },

  handleKeyDown: function (event) {
    if (event.keyCode == 27 && this.state.modalIsOpen)
      this.setState({ modalIsOpen: false });
  },

  toggleAuthModal: function () {
    let newModalState = !this.state.modalIsOpen;
    this.setState({ modalIsOpen: newModalState });
  },

  render: function() {
    let modalStyle = {
      content : {
        top                   : '40%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        transition            : 'visibility 0s linear 0.3s, opacity 0.3s linear'
      }
    }

    var nodeModal = null;
    if (this.state.modalIsOpen) {
      nodeModal = (
        <Modal
          show={this.state.modalIsOpen}
          onClose={this.toggleAuthModal}
           containerClassName="auth-modal"
           closeOnOuterClick={true}
         >
          <AuthModal />
         </Modal>
      )
    }

    return (
      <div className="splash-header-container">
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
            <div className="splash-header-link" onClick={this.toggleAuthModal}>
              login
            </div>
            <div className="splash-header-link" onClick={this.toggleAuthModal}>
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
