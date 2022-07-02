class Comment < ApplicationRecord
  belongs_to :user, class_name: "users", foreign_key: "user_id"
end
