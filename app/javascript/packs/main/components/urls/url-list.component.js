import urlListTemplate from "./url-list.template.pug";

class UrlListController {
    constructor(UrlService, FlashService, $uibModal) {
        "ngInject";
        this.UrlService = UrlService;
        this.$uibModal = $uibModal;
        this.FlashService = FlashService;
    }

    $onInit() {
        this.popovers = ['Show', 'Delete'];
        this.sortType     = 'counter'; 
        this.sortReverse  = false;  
        let today = new Date();
        this.daysLeft = {};
        this.urls.forEach(url => {
            let createdAt = new Date(url.created_at);
            this.daysLeft[url.id] = Math.round(15 - (today-createdAt)/86400000);
        });
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

export const urlList = {
    controller: UrlListController,
    template: urlListTemplate,
    bindings: {
        urls: '<',
        user: '<'
    }
};