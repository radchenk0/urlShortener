export class UrlService {
    constructor($http, $localStorage, FlashService) {
        "ngInject";
        this.$http = $http;
        this.userId = $localStorage.user.id;
        this.FlashService = FlashService;
    }

    getUrls() {
        let { $http, userId, FlashService } = this;
        return $http.get('/api/users/' + userId + '/urls')
        .then(
            response => {
                return response.data
            },
            response => {
                console.log(response);
            }
        );
    }

    getUrl(id) {
        let { $http, userId, FlashService } = this;
        return $http.get('/api/users/' + userId + '/urls/' + id)
        .then(
            response => {
                return response.data
            },
            response => {
                FlashService.addAlert('danger', response.data.error)
            }
        );
    }

    createUrl(url) {
        let { $http, userId, FlashService } = this;
        $http.post('/api/users/' + userId + '/urls/', JSON.stringify(url))
        .then(
            response => {
                FlashService.addAlert('success', 'Url successfully created');
            },
            response => {
                response.data.errors.forEach(message => {
                    FlashService.addAlert('danger', message);
                });
            }
        );
    }

    deleteUrl(id) {
        let { $http, userId, FlashService } = this;
        $http.delete('/api/users/' + userId + '/urls/' + id)
        .then(
            response => {
                FlashService.addAlert('success', 'Url successfully deleted');
            },
            response => {
                FlashService.addAlert('danger', response.data.error)
            }
        );
    }
}