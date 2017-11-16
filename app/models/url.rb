class Url < ApplicationRecord
    belongs_to :user
    before_validation :normalize_original
    after_validation :set_id_if_slug_exists_and_unique
    after_create :set_slug_if_doesnt_exist
    validates :original, :user_id, :presence => true
    validates :original, :successful_response => true, :uniqueness => true
    validates :slug, :uniqueness => true

    private

    def normalize_original
        self.original = 'http://' + self.original if !self.original.start_with? 'http'
    end

    def set_id_if_slug_exists_and_unique
        self.id = Base62::decode(self.slug) if self.slug
    end

    def set_slug_if_doesnt_exist
        if !self.slug
            slug = Base62::encode(self.id)
            self.update!(:slug => slug)
        end
    end

end