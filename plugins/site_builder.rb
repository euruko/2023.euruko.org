class SiteBuilder < Bridgetown::Builder
  # write builders which subclass SiteBuilder in plugins/builders
end

Bridgetown::Resource::PermalinkProcessor.register_placeholder :group, ->(resource) do
  "#{resource.data.group}"
end

Bridgetown::Resource::PermalinkProcessor.register_placeholder :speaker_or_slug, ->(resource) do
  if resource.relations.speaker
    resource.relations.speaker.data.name
  else
    resource.data.slug.gsub("_", "-")
  end
end
