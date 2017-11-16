Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    mount_devise_token_auth_for 'User', at: 'auth'
    get 'users/:user_id/urls', to: 'urls#index'
    get 'users/:user_id/urls/:id', to: 'urls#show'
    post 'users/:user_id/urls', to: 'urls#create'
    delete 'users/:user_id/urls/:id', to: 'urls#destroy'
  end

end
