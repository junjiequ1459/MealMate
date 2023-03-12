json.array!(@reviews) do |review|
  json.extract! review, :id, :content, :rating, :business_id, :author_name, :author_id, :created_at, :updated_at
end
