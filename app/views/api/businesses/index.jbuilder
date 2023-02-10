json.array! @businesses do |business|
  json.extract! business, :id, :name, :created_at, :updated_at
end
