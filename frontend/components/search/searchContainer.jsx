import { connect } from 'react-redux';
import SearchIndex from './search.jsx';

const mapStateToProps = state => ({
  beers: state.beers,
  breweries: state.breweries
});

export default connect(
  mapStateToProps,
  null
)(SearchIndex);
