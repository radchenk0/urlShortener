class HomeController < ApplicationController
    def index
    end

    def redirect
        url = Url.find_by(:slug => params[:slug])
        if url           
            url.increment(:counter)
            url.save
            redirect_to url[:original]
        else
            redirect_to :root
        end
    end
end