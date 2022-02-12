module Api
  module V1
    class UniversitiesController < ApplicationController
      def index
        universities = University.all
        render json: universities
      end

      def create
        universities = University.get_info
        if universities
          render json: universities, status: 'success'
        else
          render json: universities.errors
        end
      end

      def show
      end

      def destroy
      end


      private

      def university_data
        @university_data ||= University.find(params[:name])
      end
    end
  end
end
