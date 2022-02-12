Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      get 'universities/index'
      post 'universities/create'
      get 'universities/show'
      post 'universities/destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end