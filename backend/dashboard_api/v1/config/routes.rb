Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :links
      resources :comments
      resources :users
      resources :login, to: 'session#login'
      get 'reddit.com/r/popular.json', to: 'session#reddit'
      get 'hacker-news.firebaseio.com/v0/topstories.json', to: 'session#hackerNews'
    end
  end



  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


  # Defines the root path route ("/")
  # root "articles#index"
end
