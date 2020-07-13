Jets.application.routes.draw do
  resources :campaigns, only: %i[index show]
end
