import urlNewTemplate from './url-new.template.pug';

class UrlNewController {
    constructor($localStorage, UrlService, FlashService) {
        "ngInject";
        this.$localStorage = $localStorage;
        this.UrlService = UrlService;
        this.FlashService = FlashService;
    }

    $onInit() {
        this.slugPattern = '[A-Za-z0-9]{1,}';
        this.hostName = HOSTNAME;
    }
    
    submit(valid) {
        if (valid) {
            let url = {
                "original": this.original,
                "slug": this.slug
            };    
            return this.UrlService.createUrl(url);
        }
    }
}

export const urlNew = {
    controller: UrlNewController,
    template: urlNewTemplate
};