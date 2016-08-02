import { connect } from 'react-redux';
// import { updateBeer, receiveBeer } from "../../actions/beerActions";
import BreweriesIndex from "./breweries_index";

const mapStateToProps = state => ({
  breweries: state.breweries
});

// const mapDispatchToProps = dispatch => ({
//   fetchBeers: beers => dispatch( fetchBeers() )
// });

export default connect(
  mapStateToProps,
  null
)(BreweriesIndex);
