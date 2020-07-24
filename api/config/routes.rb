Jets.application.routes.draw do
  resources :campaigns, except: :delete do
    resources :player_characters, except: :delete
  end
end
