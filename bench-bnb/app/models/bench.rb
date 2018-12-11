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
   def self.in_bounds(bounds)
      coords = {
        ne_lng: bounds[:northEast][:lng], 
        sw_lng: bounds[:southWest][:lng], 
        ne_lat: bounds[:northEast][:lat], 
        sw_lat: bounds[:southWest][:lat]
      }
      query = "lng >= :sw_lng AND lng <= :ne_lng AND lat <= :ne_lat AND lat >= :sw_lat"

      self.where(query, coords)
   end
end
