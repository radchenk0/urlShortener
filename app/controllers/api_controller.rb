class ApiController < ActionController::API
    def index
        render json: {message: "API works", status: "success"}, status: :ok
    end
end
