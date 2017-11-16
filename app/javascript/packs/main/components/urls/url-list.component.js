import urlListTemplate from "./url-list.template.pug";

class UrlListController {
    constructor(UrlService, FlashService, $uibModal) {
        this.UrlService = UrlService;
        this.$uibModal = $uibModal;
        this.FlashService = FlashService;
    }

    $onInit() {
        this.popovers = ['Show', 'Delete'];
        this.sortType     = 'counter'; 
        this.sortReverse  = false;  
        let today = new Date().getUTCHours();
        let days_left = {};
        this.urls.forEach(url => {
            let created_at = new Date(url.created_at).getUTCHours();
            days_left[url.id] = 15 - Math.floor((today - created_at)/24);
        });
        this.days_left = days_left;
        
    }

    delete(url) {
        let urlId = url.id;
        let modalInstance = this.$uibModal.open({
            animation: true,
            component: 'modalConfirm',
            resolve: {
                originalUrl: () => url.original
            }
        });
        
        modalInstance.result.then(response => {
                this.urls = this.urls.filter( url => url.id !== urlId);
                return this.UrlService.deleteUrl(urlId);
                
            });
    }
}

UrlListController.$inject = ['UrlService', 'FlashService', '$uibModal'];

export const urlList = {
    controller: UrlListController,
    template: urlListTemplate,
    bindings: {
        urls: '<',
        user: '<'
    }
};