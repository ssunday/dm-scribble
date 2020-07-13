# DND Scrawl API

Built using Ruby on Jets

## Requirements

- Ruby 2.6.5
- Docker for Dynamodb Locally
- AWS Credential file removed (issue with local Dynamodb)

## Setup

- `docker-compose up`
- `bundle install`
- `cp .example.env .env`
- `bundle exec rake dynamoid:create_tables`
- `bundle exec jets seed:dev`
- `bundle exec jets server`

## Testing

Make sure to run `JETS_ENV=test bundle exec rake dynamoid:create_tables`

Before:

`bundle exec rspec`

## Linting

`bundle exec rubocop -a -c .rubocop.yml`
