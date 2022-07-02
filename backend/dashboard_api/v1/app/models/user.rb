class User < ApplicationRecord
  has_many :commentss, class_name: "comments", foreign_key: "reference_id", dependent: :destroy
  has_many :links, :through :comments
end
