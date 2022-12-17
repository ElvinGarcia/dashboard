class User < ApplicationRecord
  attr :password
  has_secure_password
  # Associations
  has_many :comments, dependent: :destroy
  has_many :links, :through => :comments

  # Validations
  validates :username, uniqueness: {case_sensitive: false}
  validates :email, uniqueness: {case_sensitive: false}, format: { with: URI::MailTo::EMAIL_REGEXP } #this his method does not check domain


  # def authenticate(plaintext_password)
  #   if BCrypt::Password.new(self.password_digest) == plaintext_password
  #     self
  #   else
  #     false
  #   end
  # end


end
