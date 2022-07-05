class Comment < ApplicationRecord
  belongs_to :link
  belongs_to :user :through, :links
end
