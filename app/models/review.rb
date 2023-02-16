# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  content     :text             not null
#  rating      :integer          not null
#  business_id :bigint
#  useful      :integer
#  funny       :integer
#  cool        :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  belongs_to :business,
             foreign_key: :business_id
end
