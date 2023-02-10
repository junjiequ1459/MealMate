class BusinessesController < ApplicationController
  def index
    businesses = Business.fetch_businesses
    render json: businesses
  end
end
