import { connect } from 'react-redux';
// import { updateBeer, receiveBeer } from "../../actions/beerActions";
import BeersIndex from "./beersIndex";

const mapStateToProps = state => ({
  beers: state.beers
});

// const mapDispatchToProps = dispatch => ({
//   fetchBeers: beers => dispatch( fetchBeers() )
// });

export default connect(
  mapStateToProps,
  null
)(BeersIndex);
