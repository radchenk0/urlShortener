require 'net/http'
class SuccessfulResponseValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
        return if value.blank?
        uri = URI(value)
        response = Net::HTTP.get_response(uri)
        unless response.kind_of? Net::HTTPSuccess
            record.errors[attribute] << (options[:message] || 'Status code of response for GET request isn\'t successful')
        end
    end
  end