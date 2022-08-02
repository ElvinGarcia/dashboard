class Api::V1::UsersController < ApplicationController
  # before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
  # password = params[:password]
  # username = params[:username]
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      @token = encode_token(user_id:@user.id)
      render json:{
        user: UserSerializer.new(@user),
        jwt: @token
      },
      status: :created
    else
      render json:{
        error: @user.errors.full_messages[0]
      }, status: :unprocessable_entity, code: 406
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :email, :name, :password)
    end
end

