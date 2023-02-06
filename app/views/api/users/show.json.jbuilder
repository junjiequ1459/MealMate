json.user do
  json.extract! @user, :id, :email, :fname, :lname, :zipcode, :created_at, :updated_at
end
