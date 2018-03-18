class CreatePeople < ActiveRecord::Migration[5.0]
  def change
    create_table :people do |t|
      t.string :position
      t.string :full_name

      t.timestamps
    end
  end
end
