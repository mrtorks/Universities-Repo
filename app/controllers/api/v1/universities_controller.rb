# Be sure to restart your server when you modify this file.
module Api
  module V1
    class UniversitiesController < ApplicationController
      before_action :check_data_integrity, only: :index
      def index
        @universities = University.all.order(name: :asc)
        render json: @universities
      end

      def check_data_integrity
        @data = University.all.order(name: :asc)
        @universities = DataService::UniversityDataService.get_info if @data.empty?

        if @universities == true
          render json: @data, status: 'ok'
        end
      end

      #private

      #def university_data
      #  @university_data ||= University.find(params[:name])
      #end
    end
  end
end



