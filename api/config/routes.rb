Jets.application.routes.draw do
  resources :campaigns, except: :delete
end
