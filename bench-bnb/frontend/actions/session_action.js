import * as APIUtil from "../util/session_api_util";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const LOGIN_ERRORS = "LOGIN_ERRORS";
export const SIGNUP_ERRORS = "SIGNUP_ERRORS";

export const loginUser = user => ({ type: LOGIN_USER, user });
export const loginErrors = errors => ({ type: LOGIN_ERRORS, errors });

export const logoutUser = () => ({ type: LOGOUT_USER });

export const signupUser = user => ({ type: SIGNUP_USER, user });
export const signupErrors = errors => ({ type: SIGNUP_ERRORS, errors });

export const postLoginUser = user => dispatch =>
  APIUtil.login(user).then(
    user => dispatch(loginUser(user)),
    errors => dispatch(loginErrors(errors))
  );

export const deleteLogoutUser = () => dispatch =>
  APIUtil.logout().then(dispatch(logoutUser()));

export const postSignupUser = user => dispatch =>
  APIUtil.signup(user).then(
    user => dispatch(signupUser(user)),
    errors => dispatch(signupErrors(errors))
  );
