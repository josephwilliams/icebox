class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email
      t.string :picture_url, default: "https://s3-us-west-1.amazonaws.com/icebox-beer/default_prof_pic.jpg"

      t.timestamps null: false
    end

    add_index :users, :username
    add_index :users, :email
  end
end
