import { connect } from 'react-redux';
import { createBeer } from '../../actions/beerActions';
import BeerNewForm from './beerNewForm'; // upload beer form

// const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
  createBeer: beer => dispatch( createBeer(beer) )
});

export default connect(
  null,
  mapDispatchToProps
)(BeerNewForm);
