import { connect } from 'react-redux';
import { addBeer } from '../../actions/beerActions';
import BeerNewForm from './beerNewForm'; // upload beer form

const mapStateToProps = state => ({
  beers: state.beers
});

const mapDispatchToProps = dispatch => ({
  addBeer: beer => dispatch( addBeer(beer) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerNewForm);
