class LinkSerializer < ActiveModel::Serializer
  attributes :id, :url, :data, :title
end
