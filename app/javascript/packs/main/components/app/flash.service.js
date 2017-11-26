export class FlashService {
    constructor($rootScope) {
        "ngInject";
        this.$rootScope = $rootScope;
        this.$rootScope.alerts = [];
    }

    addAlert(type, msg) {
        let $rootScope = this.$rootScope;
        $rootScope.alerts.push({
            type,
            msg
        });
    }

    closeAlert(index) {
        let $rootScope = this.$rootScope;
        $rootScope.alerts.splice(index, 1);
    }
}