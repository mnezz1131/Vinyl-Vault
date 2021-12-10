class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :title
      t.string :artist
      t.string :genre
      t.string :img_url
      t.string :vendor
      t.string :condition
      t.string :cost
      t.integer :purchased
      t.integer :released
      t.references :user_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
