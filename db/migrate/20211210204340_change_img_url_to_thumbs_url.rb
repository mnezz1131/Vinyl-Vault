class ChangeImgUrlToThumbsUrl < ActiveRecord::Migration[6.1]
  def change
  rename_column :albums, :img_url, :thumb_url

  end
end
