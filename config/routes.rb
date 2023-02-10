Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :businesses, only: [:index]
  end

  # Catch-all route to serve up frontend files
  get "*path", to: "static_pages#frontend_index"

  # The version below will allow Active Storage routes to escape the catch-all
  # if the load order is not set in config/application.rb
  # get '*path', to: "static_pages#frontend_index", constraints: ->(req) {
  #   req.path.exclude? 'rails/active_storage'
  # }
end
