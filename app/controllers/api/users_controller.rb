class Api::UsersController < ApplicationController
  before_action :require_logged_out, only: [:create]

  def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  wrap_parameters include: User.attribute_names + ["password"]

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
