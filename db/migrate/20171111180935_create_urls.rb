class CreateUrls < ActiveRecord::Migration[5.1]
  def change
    create_table :urls do |t|
      t.text :original
      t.string :slug
      t.integer :counter, default: 0
      t.datetime :expired_at, default: DateTime.now.utc + 15.days
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
