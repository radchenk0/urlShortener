import appTemplate from './app.template.pug';

class MainController {
  constructor($localStorage, $rootScope, $auth, FlashService) {
    this.$localStorage = $localStorage;
    this.$rootScope = $rootScope;
    this.$auth = $auth;
    this.FlashService = FlashService;
    this.closeAlert = FlashService.closeAlert.bind(FlashService);
  }

  $onInit() {
    let { $localStorage, $rootScope, $auth, FlashService } = this;
    this.user = $localStorage.user;
    this.alerts = $rootScope.alerts;
    this.isCollapsed = true;
  }

  logOut() {
    let { $localStorage, $rootScope, $auth, FlashService } = this;
    $auth.signOut()
        .then(response => { 
          FlashService.addAlert('success', 'You are successfully logged out! Bye!')
        })
        .catch(response => {
          FlashService.addAlert('danger', `${response.errors} Something goes wrong! Please try again`)
        });
  }   
}

MainController.$inject = ['$localStorage', '$rootScope', '$auth', 'FlashService'];

export const app = {
  controller: MainController,
  template: appTemplate
};
