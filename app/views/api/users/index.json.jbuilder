json.array!(@users) do |user|
  json.extract! user, :id, :username, :email, :picture_url, :created_at
end
