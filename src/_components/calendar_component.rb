require "icalendar"
require "icalendar/tzinfo"

class CalendarComponent < Bridgetown::Component
  attr_reader :talks, :calendar_name, :default_location

  def initialize(talks:, calendar_name: "Euruko 2022", default_location: "")
    @talks, @calendar_name, @default_location = talks, calendar_name, default_location
  end

  def render_in(view_context, &block)
    cal = Icalendar::Calendar.new

    event_start = talks.first.data.start_time
    tzid = "Europe/Helsinki"
    tz = TZInfo::Timezone.get tzid
    timezone = tz.ical_timezone event_start
    cal.add_timezone timezone

    cal.append_custom_property("REFRESH-INTERVAL", "PT1H")
    cal.append_custom_property("X-PUBLISHED-TTL", "PT1H")
    cal.append_custom_property("X-WR-CALNAME", calendar_name)

    talks.each do |talk|
      next unless talk.data.ics

      cal.event do |e|
        e.dtstart     = Icalendar::Values::DateTime.new(talk.data.start_time)
        e.dtend       = Icalendar::Values::DateTime.new(talk.data.end_time)
        e.summary     = talk.data.title
        e.description = talk.data.summary
        e.location    = talk.data.fetch(:location, default_location)
        e.url         = talk.absolute_url if talk.data.linkable
        e.image       = absolute_url(talk.data.social_image) if talk.data.social_image
      end
    end

    cal.to_ical
  end
end
