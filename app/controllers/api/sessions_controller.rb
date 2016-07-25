class Api::SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )
    if @user.nil?
      render json: {message: 'Invalid Username and/or Password'}, status: 422
    else
      login_user!(@user)
      render :show
    end

  end

  def show
    @user = current_user
    if @user
      render :show
    else
      render :errors
    end
  end

  def destroy
    logout_user!
    render :new
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
