class ApplicationController < Jets::Controller::Base
  rescue_from Dynamoid::Errors::DocumentNotValid, with: :unprocessable_entity_response

  def unprocessable_entity_response(invalid)
    render status: :unprocessable_entity, json: { error: invalid.message }
  end
end
