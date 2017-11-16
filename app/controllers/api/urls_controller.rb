require 'base62'

module Api
    class UrlsController < ApiController
        before_action :authenticate_api_user!
        before_action :set_url, only: [:show, :destroy]

        def index
            @urls = current_api_user.urls
            render json: @urls, :status => :ok
        end

        def show
            if @url
                render json: @url, :status => :ok
            else
                render json: {:error => 'Url not found' }, :status => :not_found
            end
        end 

        def create
            @url = current_api_user.urls.build(url_params)
            if @url.save
                render json: @url, :status => :created
            else
                render json: {:errors => @url.errors.full_messages}, :status => :unprocessable_entity
            end
        end

        def destroy
            if @url
                @url.destroy
                head :no_content
            else
                render json: {:error => 'Url not found'}, :status => :not_found
            end
        end

        private

        def set_url
            @url = current_api_user.urls.find(params[:id])
        end

        def url_params
            params.require(:url).permit(:original, :slug)
        end
    end
end