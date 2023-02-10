class Business < ApplicationRecord
  def self.fetch_businesses
    where(category: "Food, Restaurants, Salad, Coffee & Tea, Breakfast & Brunch, Sandwiches, Bakeries")
  end
end
