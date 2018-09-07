Rails.application.routes.draw do
  devise_for :users
  get 'hello_world', to: 'hello_world#index'
  resources :sign_in

  root 'sign_in#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
