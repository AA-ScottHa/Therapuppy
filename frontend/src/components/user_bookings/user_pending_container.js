import {connect} from 'react-redux';
import UserBookings from './user_bookings'

const msp = (state, ownProps) => {
    const currentUser = Object.values(state.entities.users).filter(user => user._id === state.session.user._id)[0]
    debugger
    return({
    type: "pending",
    bookings: currentUser.bookings.filter(booking => booking.status === "5e717ae318716c8dc9bd5bf5"),
    currentUser: currentUser

})}

const mdp = dispatch => ({

})

export default connect(msp, mdp)(UserBookings)