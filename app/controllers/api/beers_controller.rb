class Api::BeersController < ApplicationController
  def new
    @beer = Beer.new
  end

  def create
    @beer = Beer.new(beer_params)

    if @beer.save!
      render :show
    else
      render :errors
    end
  end

  def show
    @beer = Beer.find(params[:id])
  end

  def index
    @beers = Beer.all
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
    render :new
  end

  private
  def beer_params
    params.require(:beer).permit(:name, :brewery, :abv, :style, :description, :photo_url)
  end
end
