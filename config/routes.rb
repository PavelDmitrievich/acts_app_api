Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope 'api' do
    post 'auth/login', to: 'authentication#authenticate'
    post 'signup', to: 'users#create'

    resources :acts
  end
end
