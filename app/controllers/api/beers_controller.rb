class Api::BeersController < ApplicationController
  def new
    @beer = Beer.new
  end

  def index
    @beers = Beer.all
  end

  def show
    @beer = Beer.find(params[:id])
  end

  def create
    @beer = Beer.new(beer_params)

    if @beer.save!
      render :show
    else
      render :errors
    end
  end

  def search
    beer_results = Beer.where("name LIKE?", "#{params[:search]}")
    @beers = beer_results
    render :search
  end

  def update
    @beer = Beer.find(params[:id])

    if @beer.update_attributes(beer_params)
      render :show
    else
      render :errors
    end
  end

  def destroy
    @beer = Beer.find(params[:id])
    @beer.destroy
    render :index
  end

  private
  def beer_params
    params.require(:beer).permit(:name, :brewery, :abv, :style, :description, :photo_url)
  end
end
