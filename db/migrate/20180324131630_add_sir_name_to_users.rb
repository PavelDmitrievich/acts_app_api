class AddSirNameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :sir_name, :string
  end
end
