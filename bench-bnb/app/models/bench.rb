# == Schema Information
#
# Table name: benches
#
#  id          :bigint(8)        not null, primary key
#  description :string
#  []          :string
#  lat         :string
#  lng         :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ApplicationRecord
   def in_bounds?(bounds)
      ne_lng = bounds[:northEast][:lng]
      sw_lng = bounds[:southWest][:lng]
      ne_lat = bounds[:northEast][:lat]
      sw_lat = bounds[:southWest][:lat]
      lng <= sw_lng && lng >= ne_lng && lat <= ne_lat && lat >= sw_lat
   end
end
