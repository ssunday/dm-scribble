class MainAuthorizer < ApplicationAuthorizer
  authorizer(
    name: 'ScribbleCognito',
    identity_source: 'Authorization',
    type: :cognito_user_pools,
    provider_arns: [
      ENV['COGNITO_ARN']
    ]
  )
end
