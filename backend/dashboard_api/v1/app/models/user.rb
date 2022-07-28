class User < ApplicationRecord
  attr :password
  has_secure_password
  validates :username, uniqueness: {case_sensitive: false}
  validates :email, uniqueness: {case_sensitive: false}, format: { with: URI::MailTo::EMAIL_REGEXP } #this his method does not check domain
  has_many :comments, class_name: "comments", foreign_key: "reference_id", dependent: :destroy
  has_many :links, through: :comments

  # def authenticate(plaintext_password)
  #   if BCrypt::Password.new(self.password_digest) == plaintext_password
  #     self
  #   else
  #     false
  #   end
  # end


end
