require "countries"
require "http"

class TitoCountries
  attr_accessor :api_token, :account_slug, :event_slug
  attr_reader :registrations

  def initialize(api_token:, account_slug:, event_slug:)
    @registrations = []
    @api_token = api_token
    @account_slug = account_slug
    @event_slug = event_slug
  end

  def fetch_data
    @registrations = []
    url = "https://api.tito.io/v3/#{account_slug}/#{event_slug}/registrations"
    page = 1

    while page > 0
      response = HTTP.auth("Token #{api_token}").
        get(url, params: { page: page })
      parsed = response.parse

      if parsed.key?("registrations")
        @registrations.push(*parsed.fetch("registrations"))
      end

      if (next_page = parsed.dig("meta", "next_page"))
        page = next_page
      else
        page = -1
      end
    end

    registrations
  end

  def registrations_count
    registrations.length
  end

  def tickets_count
    registrations.reduce(0) do |sum, registration|
      sum += registration.fetch("tickets_count")
    end
  end

  def stats
    total = tickets_count

    counts = registrations.reduce({}) do |countries, registration|
      country_code = registration.dig("billing_address", "country")
      countries[country_code] ||= 0
      countries[country_code] += registration.fetch("tickets_count")
      countries
    end

    countries = counts.reduce([]) do |countries, (country_code, count)|
      country = ISO3166::Country.new(country_code)

      percentage = (count.to_f / total) * 100
      percentage = percentage >= 1 ? percentage.round : 1

      countries.push({
        country_code: country_code || "XX",
        alpha3: country&.alpha3 || "XXX" ,
        name: country&.common_name || "Unknown" ,
        longitude: country&.longitude || 0,
        latitude: country&.latitude || 0,
        world_region: country&.world_region || "Unknown",
        region: country&.region || "Unknown",
        subregion: country&.subregion || "Unknown",
        percentage: percentage
      })

      countries
    end

    countries.sort_by { |c| c[:percentage] }.reverse
  end
end
