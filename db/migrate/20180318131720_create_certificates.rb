class CreateCertificates < ActiveRecord::Migration[5.0]
  def change
    create_table :certificates do |t|
      t.string :name
      t.string :serial_number
      t.references :act, foreign_key: true

      t.timestamps
    end
  end
end
