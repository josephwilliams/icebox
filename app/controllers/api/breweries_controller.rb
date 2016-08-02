class BreweriesController < ApplicationController
  def new
    @brewery = Brewery.new
  end

  def index
    @breweries = Brewery.all
  end

  def show
    @brewery = Brewery.find(params[:id])
  end

  def create
    @brewery = Brewery.new(brewery_params)

    if @brewery.save!
      render :show
    else
      render :errors
    end
  end

  def search
    brewery_results = Brewery.where("name LIKE?", "#{params[:search]}")
    @breweries = brewery_results
    render :search
  end

  def update
    @brewery = Brewery.find(params[:id])

    if @brewery.update_attributes(brewery_params)
      render :show
    else
      render :errors
    end
  end

  def destroy
    @brewery = Brewery.find(params[:id])
    @brewery.destroy
    render :index
  end

  private
  def brewery_params
    params.require(:brewery).permit(:name, :location, :logo_url)
  end
end
