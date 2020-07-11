require 'dynamoid'

Jets.application.configure do
  config.action_mailer.delivery_method = :test

  Dynamoid.configure do |config|
    config.access_key = 'test'
    config.secret_key = 'test'
    config.endpoint = 'http://localhost:8000'
  end
end
