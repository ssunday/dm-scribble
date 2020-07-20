require 'dynamoid'

Jets.application.configure do
  config.action_mailer.delivery_method = :test

  Dynamoid.configure do |config|
    config.endpoint = 'http://localhost:8000'
  end
end
