class Api::BusinessesController < ApplicationController
  def index
    businesses = Business.all
    render json: businesses
  end

  def show
    @business = Business.find_by(business_id: params[:business_id])
    render json: @business
  end
end
