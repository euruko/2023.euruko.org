require "bridgetown"
require "tty-logger"

Bridgetown.load_tasks

# Run rake without specifying any command to execute a deploy build by default.
task default: :deploy

#
# Standard set of tasks, which you can customize if you wish:
#
desc "Build the Bridgetown site for deployment"
task :deploy => [:clean, "frontend:build"] do
  Bridgetown::Commands::Build.start
end

desc "Build the site in a test environment"
task :test do
  ENV["BRIDGETOWN_ENV"] = "test"
  Bridgetown::Commands::Build.start
end

desc "Runs the clean command"
task :clean do
  Bridgetown::Commands::Clean.start
end

namespace :frontend do
  desc "Build the frontend with Webpack for deployment"
  task :build do
    sh "yarn run webpack-build"
  end

  desc "Watch the frontend with Webpack during development"
  task :dev do
    sh "yarn run webpack-dev --color"
  rescue Interrupt
  end
end

#
# Add your own Rake tasks here! You can use `environment` as a prerequisite
# in order to write automations or other commands requiring a loaded site.
#
# task :my_task => :environment do
#   puts site.root_dir
#   automation do
#     say_status :rake, "I'm a Rake tast =) #{site.config.url}"
#   end
# end

namespace :brella do
  desc "Generate a CSV schedule for Brella"
  task schedule: :environment do
    logger = TTY::Logger.new

    logger.info("Reading the site")
    site.read

    headers = %w(id external_id start_time duration reservable title subtitle location content tags)
    csv_path = File.expand_path("./brella_schedule.csv")

    logger.info("Generating the CSV")
    csv_string = CSV.generate do |csv|
      csv << headers

      site.collections.talks.resources.each do |talk|
        start_time = talk.data.start_time.strftime("%Y-%m-%d %H:%M")
        duration = (talk.data.end_time - talk.data.start_time).to_i / 60
        reservable = talk.data.ics ? "FALSE" : "TRUE"
        subtitle = talk.relations.speaker ? "By #{talk.relations.speaker.data.name}" : ""
        csv << [
          "", "", start_time, duration,
          reservable, talk.data.title, subtitle, "", talk.data.summary, ""
        ]
      end
    end

    logger.info("Writing to file", {
      path: csv_path
    })

    File.open(csv_path, "wb") do |file|
      file.write csv_string
    end

    logger.success("Done")
  end
end

namespace :tito do
  desc "Update the attendee country stats"
  task :country_stats, [:account_slug, :event_slug] do |_task, args|
    require "./lib/tito_countries"

    logger = TTY::Logger.new
    stats_path = File.expand_path("./frontend/data/stats.json", __dir__)
    token_regexp = /\A(secret_)([^_]+)_(.+)\z/i

    tito_countries = TitoCountries.new(
      api_token: ENV.fetch("TITO_API_TOKEN"),
      account_slug: args.fetch(:account_slug),
      event_slug: args.fetch(:event_slug)
    )

    logger.info("Fetching data from Tito", {
      api_token: tito_countries.api_token.gsub(token_regexp, '\1\2_...'),
      account: tito_countries.account_slug,
      event: tito_countries.event_slug
    })

    tito_countries.fetch_data

    logger.success("Received data", {
      orders: tito_countries.registrations_count,
      tickets: tito_countries.tickets_count
    })

    stats = tito_countries.stats

    logger.success("Processed stats", {
      countries: stats.length
    })

    logger.info("Writing to file", {
      path: stats_path
    })

    out = File.open(stats_path, "wb") do |file|
      file.write(JSON.pretty_generate(stats))
    end

    logger.success "Done", bytes: out
  end
end
