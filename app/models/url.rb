class Url < ApplicationRecord
    belongs_to :user
    validates :original, :user_id, :presence => true
    validates :original, :successful_response => true, :uniqueness => true
    validates :slug, :uniqueness => true

end