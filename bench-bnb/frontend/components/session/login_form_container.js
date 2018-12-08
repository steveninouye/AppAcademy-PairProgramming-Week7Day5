import { connect } from "react-redux";
import SessionForm from "./session_form";
import { postLoginUser } from "../../actions/session_action";

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: "Login"
});

const mDTP = dispatch => ({
  action: user => dispatch(postLoginUser(user))
});

export default connect(
  mSTP,
  mDTP
)(SessionForm);
