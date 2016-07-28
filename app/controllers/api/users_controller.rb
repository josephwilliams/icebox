class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login_user!(@user)
      render :show
    else
      render :errors, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)

    if @user.save
      render :show
    else
      render :errors
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:password,
                                 :username,
                                 :email
                                 )
  end
end
