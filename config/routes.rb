Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :index, :show, :update]
    resource :session, only: [:new, :show, :create, :destroy]
    resources :breweries
    resources :beers
    resources :reviews
  end
end
