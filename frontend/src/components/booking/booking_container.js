import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Booking from './booking.jsx';
import {  } from '../../actions/booking_actions.js';

const mapStateToProps = (state, ownProps) => {


  return {
    
  };
};

const mapDispatchToProps = dispatch => ({
  // updateBooking: booking => dispatch()
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Booking));
