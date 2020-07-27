class ApplicationController < Jets::Controller::Base
  rescue_from Dynamoid::Errors::DocumentNotValid, with: :unprocessable_entity_response

  protected

  def unprocessable_entity_response(invalid)
    render status: :unprocessable_entity, json: { error: invalid.message }
  end

  def parse_params(key)
    params.fetch(key, {}).transform_keys(&:underscore)
  end

  def transform_record(record)
    record.as_json.transform_keys { |k| k.camelize(:lower) }
  end
end
