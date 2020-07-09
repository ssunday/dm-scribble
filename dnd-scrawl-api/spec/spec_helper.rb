ENV['JETS_TEST'] = '1'
ENV['JETS_ENV'] ||= 'test'
ENV['HOME'] = 'spec/fixtures/home'

require 'byebug'
require 'fileutils'
require 'jets'

abort('The Jets environment is running in production mode!') if Jets.env == 'production'
Jets.boot

require 'jets/spec_helpers'

require 'capybara/rspec'
Capybara.app = Jets.application
