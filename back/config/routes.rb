Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  mount ActionCable.server => '/cable'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  jsonapi_resources :chatrooms
  jsonapi_resources :messages
  jsonapi_resources :users
end
