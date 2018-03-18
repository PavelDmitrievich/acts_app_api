class CreateActs < ActiveRecord::Migration[5.0]
  def change
    create_table :acts do |t|
      t.integer :act_number
      t.string :organization
      t.text :conclusion
      t.string :score
      t.string :provider
      t.string :date_of_acceptance
      t.references :user, foreign_key: true
      t.references :storage, foreign_key: true

      t.timestamps
    end
  end
end
