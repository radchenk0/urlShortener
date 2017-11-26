import urlShowTemplate from "./url-show.template.pug";

class UrlShowController {
    constructor($timeout) {
        "ngInject";
        this.$timeout = $timeout;
    }

    $onInit() {
        this.popovers = ['Copy to clipboard', 'Try your short url!'];
        this.shortUrl = HOSTNAME + '/' + this.url.slug;
        this.expired_at = format(new Date(this.url.expired_at));
        this.created_at = format(new Date(this.url.created_at));
    }

    onPopoverSuccess() {
        this.popovers[0] = 'Copied';
    }

    resetPopoverText() {
        let $timeout = this.$timeout;
        $timeout(() => { this.popovers[0] = 'Copy to clipboard';}, 300);
    }
}

const format = (inputDate) => {
    let date = inputDate.getDate();
    let dateWithZero = (date < 10) ? `0${date}` : date;
    let month = inputDate.getMonth() + 1;
    let monthWithZero = (month < 10) ? `0${month}` : month;
    let year = inputDate.getFullYear();
    return `${dateWithZero}/${monthWithZero}/${year}`;
}

export const urlShow = {
    controller: UrlShowController,
    template: urlShowTemplate,
    bindings: {
        url: '<',
        user: '<'
    }
};