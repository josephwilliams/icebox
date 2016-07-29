import { connect } from 'react-redux';
import { updateBeer, receiveBeer } from "../../actions/beerActions";
import BeersIndex from "./beersIndex";

const mapStateToProps = state => ({
  beers: receiveBeers();
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
