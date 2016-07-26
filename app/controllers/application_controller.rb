class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  helper_method :current_user, :logged_in?

  def login_user!(user)
    session[:session_token] = user.session_token
  end

  def logout_user!
    @current_user = nil
    session[:session_token] = nil
  end

  def logged_in?
    !current_user.nil?
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end
end
