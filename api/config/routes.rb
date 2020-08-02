Jets.application.routes.draw do
  resources :campaigns, except: :delete, authorizer: 'main#scribble_cognito' do
    resources :player_characters, except: :delete
  end
end
