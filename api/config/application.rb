require 'dynamoid'

Jets.application.configure do
  config.project_name = 'dnd-scrawl-api'
  config.prewarm.enable = false

  Dynamoid.configure do |config|
    config.namespace = Jets.env
    config.logger = nil
  end
end
