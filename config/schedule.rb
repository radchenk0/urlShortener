every :hour do 
    rake 'urls:delete_15_days_old'
end

