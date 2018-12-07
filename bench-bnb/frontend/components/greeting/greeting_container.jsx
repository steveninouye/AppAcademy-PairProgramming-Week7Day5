import { connect } from "react-redux";
import Greeting from "./greeting";

const mSTP = state => ({});

const mDTP = dispatch => ({});

export default connect(
  mSTP,
  mDTP
)(Greeting);
