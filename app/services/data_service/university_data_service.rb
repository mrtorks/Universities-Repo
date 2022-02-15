module DataService
  class UniversityDataService
    require 'faraday/net_http'

    def self.get_info
      countries = ['United States', 'Canada']
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
          req.headers['Content-Type'] = 'application/json'
        end
        create_record(response.body)
      end
    end

    def self.create_record(uni_data)
      data = JSON.parse(uni_data)
      data.each do |content|
        University.create!(name: content['name'], domains: content['domains'], country: content['country'],
                           web_pages: content['web_pages'])
      end
      true
    end
  end
end
