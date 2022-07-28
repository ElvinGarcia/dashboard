class ApplicationController < ActionController::API
  include HTTParty
  #before_action :authorized

def encode_token(payload)
  private_key = OpenSSL::PKey::RSA.new 2048
  @public_key = private_key.public_key
  JWT.encode payload, private_key, 'RS256'
end

def decode_token(token)
  begin
    JWT.encode token @public_key, true, { algorithm: 'RS256' }
  rescue JWT::DecodeError
    nil
  end
end

def current_user

end

def logged_in?
  !!current_user
end

def authorized
  unless logged_in?
    render json:{message: "please log in"}, status: :unauthorized
  end
end

end