class Link < ApplicationRecord
  has_many :comments, class_name: "comment", foreign_key: "reference_id"
  has_many :users, :through :comments
end
