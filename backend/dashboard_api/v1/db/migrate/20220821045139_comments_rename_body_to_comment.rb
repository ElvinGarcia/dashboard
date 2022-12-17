class CommentsRenameBodyToComment < ActiveRecord::Migration[7.0]
  def change
    rename_column :Comments, :body, :comment
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
