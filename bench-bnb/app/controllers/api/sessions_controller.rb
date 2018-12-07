class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])
# debugger
    if @user
      log_in(@user)
      render :create
    else

      render json: {}, status: 401
    end
  end

  def destroy
    if current_user
      log_out
      render json: {}
    else
      render json: 'You are not logged in', status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
