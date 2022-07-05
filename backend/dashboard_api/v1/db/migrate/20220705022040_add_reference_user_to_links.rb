class AddReferenceUserToLinks < ActiveRecord::Migration[7.0]
  def change
    change_table :Links do |t|
    t.belongs_to :User
    end
  end
end
