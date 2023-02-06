json.user do
  json.extract! @user, :id, :email, :username, :fname, :lname, :zipcode, :created_at, :updated_at
end
