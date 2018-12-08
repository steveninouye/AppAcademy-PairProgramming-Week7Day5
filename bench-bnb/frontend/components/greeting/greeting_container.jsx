import { connect } from "react-redux";
import Greeting from "./greeting";
import { deleteLogoutUser } from "../../actions/session_action";

const mSTP = state => {
  //   debugger;
  return {
    currentUser: state.entities.users[state.sessions.id]
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(deleteLogoutUser())
});

export default connect(
  mSTP,
  mDTP
)(Greeting);
