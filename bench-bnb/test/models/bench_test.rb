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

require 'test_helper'

class BenchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
