class ApplicationController < ActionController::Base
  helper_method :current_user

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in(user)
    session[:session_token] = user.reset_session_token
  end

  def log_out
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def require_log_in!
    render json: 'User not logged in!'
  end

end
