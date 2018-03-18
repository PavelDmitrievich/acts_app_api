class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :unit
      t.integer :quantity_doc
      t.integer :quantity_fact
      t.integer :marriage
      t.integer :limitation
      t.integer :surplus
      t.references :act, foreign_key: true

      t.timestamps
    end
  end
end
