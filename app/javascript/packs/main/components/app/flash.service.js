export class FlashService {
    constructor($rootScope) {
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

FlashService.$inject = ['$rootScope'];

