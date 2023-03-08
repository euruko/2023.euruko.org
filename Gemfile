source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

# Hello! This is where you manage which Bridgetown version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Bridgetown with `bundle exec`, like so:
#
#   bundle exec bridgetown serve
#
# This will help ensure the proper Bridgetown version is running.
#
# To install a plugin, simply run bundle add and specify the group
# "bridgetown_plugins". For example:
#
#   bundle add some-new-plugin -g bridgetown_plugins
#
# Happy Bridgetowning!

gem "bridgetown"

gem "puma"

gem "http", "~> 5.0.4"
gem "countries", "~> 4.2.1"
gem "tty-logger"

gem "icalendar", "~> 2.8.0"

group :test, optional: true do
  gem "nokogiri"
  gem "minitest"
  gem "minitest-profile"
  gem "minitest-reporters"
  gem "shoulda"
  gem "rails-dom-testing"
end

gem "bridgetown-sitemap", "~> 1.1", :group => :bridgetown_plugins
