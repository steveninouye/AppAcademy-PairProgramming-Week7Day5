import { connect } from "react-redux";
import SessionForm from "./session_form";
import { postSignupUser } from "../../actions/session_action";

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Sign Up"
});

const mDTP = dispatch => ({
  action: user => dispatch(postSignupUser(user))
});

export default connect(
  mSTP,
  mDTP
)(SessionForm);
