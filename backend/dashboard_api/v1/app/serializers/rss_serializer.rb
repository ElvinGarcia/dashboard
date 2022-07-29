class RssSerializer < ActiveModel::Serializer
  attributes :id, :url, :data, :title, :kids
end
