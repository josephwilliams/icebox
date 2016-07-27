module.exports = {
  content : {
    top                   : '38%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    opacity               : '0',
    // transition            : 'opacity 2s',
    animation             : 'appear 0.3s ease-out'
  },
  overlay: {
    zIndex            : 2,
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  }
};
