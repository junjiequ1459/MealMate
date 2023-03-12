class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
    render json: @review
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      redirect_to api_business_path(@review.business_id)
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      redirect_to api_business_path(@review.business_id)
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    redirect_to api_business_path(@review.business_id)
  end

  private

  def review_params
    params.require(:review).permit(:content, :rating, :author_name, :business_id, :author_id)
  end
end
