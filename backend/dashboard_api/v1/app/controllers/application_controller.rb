class ApplicationController < ActionController::API
  include HTTParty
  before_action :authorized
  # before_action :authorized, except [:demo_login, :demo_show]

def encode_token(payload)
  # private_key = OpenSSL::PKey::RSA.new 2048
  # public_key = private_key.public_key
  JWT.encode payload, nil, 'none'
end

def decoded_token
  if auth_header
    token = auth_header.split(' ')[1]
    # header: { 'Authorization': 'Bearer <token>' }
    begin
      JWT.decode(token, nil, false)
    rescue JWT::DecodeError
      nil
    end
  end
end

def current_user
  if decoded_token
    user_id = decoded_token[0]['user_id']
    @user = User.find_by(id: user_id)
  end
end

def logged_in?
  !!current_user
end

def authorized
  unless logged_in?
    render json:{message: "please log in"}, status: :unauthorized
  end
end

def auth_header
  request.headers['Authorization']
end

end