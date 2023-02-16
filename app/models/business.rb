# == Schema Information
#
# Table name: businesses
#
#  id          :bigint           not null, primary key
#  business_id :string           not null
#  name        :string           not null
#  address     :string           not null
#  city        :string           not null
#  state       :string           not null
#  postal_code :string           not null
#  latitude    :float            not null
#  longitude   :float            not null
#  stars       :integer          not null
#  categories  :text             not null
#  hours       :json
#  properties  :json             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Business < ApplicationRecord
  has_many :reviews,
           foreign_key: :business_id
end
