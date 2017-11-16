namespace :urls do
  desc 'delete 15 days old urls from db'
  task delete_15_days_old: :environment do
    Url.where(['created_at < ?', 15.days.ago.utc]).destroy_all
  end
end
