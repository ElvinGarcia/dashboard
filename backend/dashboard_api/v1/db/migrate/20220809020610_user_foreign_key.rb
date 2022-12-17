class UserForeignKey < ActiveRecord::Migration[7.0]
  def change
    change_table :comments do |t|
      t.belongs_to :link
    end
  end
end
