class CreateUniversities < ActiveRecord::Migration[6.1]
  def change
    create_table :universities do |t|
      t.string :name
      t.string :domains, array: true, default: []
      t.string :country
      t.string :web_pages, array: true, default: []

      t.timestamps
    end
  end
end
