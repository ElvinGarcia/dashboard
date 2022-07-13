class User < ApplicationRecord
  attr_accessor :password
  has_secure_password
  validates :username, uniqueness: {case_sensitive: false}
  has_many :commentss, class_name: "comments", foreign_key: "reference_id", dependent: :destroy
  has_many :links, :through :comments


end
