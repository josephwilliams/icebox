import { connect } from 'react-redux';
import { addBrewery } from '../../actions/brewery_actions';
import BreweryNewForm from './brewery_new_form'; // upload beer form

const mapStateToProps = state => ({
  breweries: state.breweries
});

const mapDispatchToProps = dispatch => ({
  addBrewery: brewery => dispatch( addBrewery(brewery) )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreweryNewForm);
