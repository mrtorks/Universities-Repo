class University < ApplicationRecord
  require 'faraday/net_http'

  def self.get_info
    countries = %w[usa canada]
    domain_url = 'http://universities.hipolabs.com'
    countries.map do |country|
      conn = Faraday.new(
        url: domain_url,
        params: {
          country: country
        },
        headers: { 'Content-Type' => 'application/json' }
      )
      response = conn.get('/search') do |req|
        req.params['limit'] = 100
        req.headers['Content-Type'] = 'application/json'
      end
      create_record(response.body)
    end
  end

  def self.create_record(uni_data)
    data = JSON.parse(uni_data)
    data.each do |content|
      university = University.new
      university.name = content['name']
      university.domains = content['domains']
      university.country = content['country']
      university.web_pages = content['web_pages']
      university.save!
    end
  end
end
