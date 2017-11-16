// modules import
require('ngstorage');
import collapse from 'angular-ui-bootstrap/src/collapse';
import popover from 'angular-ui-bootstrap/src/popover';
import alert from 'angular-ui-bootstrap/src/alert';
import modal from 'angular-ui-bootstrap/src/modal';
import ngMessages from 'angular-messages';
import ngClipboard from 'ngclipboard';

// components import
import { app } from './components/app/app.component';
import { home } from './components/home/home.component';
import { signUp } from './components/signUp/signUp.component';
import { signIn } from './components/signIn/signIn.component';
import { urlList } from './components/urls/url-list.component';
import { urlNew } from './components/urls/url-new.component';
import { urlShow} from './components/urls/url-show.component';
import { modalConfirm } from './components/urls/modal-confirm.component';

// services import
import { UrlService } from './components/urls/url.service';
import { FlashService } from './components/app/flash.service';

// directives import
import { compareTo } from './directives/compareTo.directive';
import { validateUrl } from './directives/validateUrl.directive';

// states import
import { mainStates } from './main.states';

export const MAIN_MODULE = angular.module('main', [
  'ngStorage',
  collapse,
  popover,
  alert,
  modal,
  ngMessages,
  ngClipboard
]);

MAIN_MODULE.config(($uiRouterProvider, $locationProvider, $authProvider, $qProvider) => {
  $qProvider.errorOnUnhandledRejections(false);
  $locationProvider.html5Mode(true);
  mainStates.forEach(state => $uiRouterProvider.stateRegistry.register(state));
  $uiRouterProvider.trace.enable(1);
  $uiRouterProvider.urlService.rules.otherwise({ state: 'home' });

});

MAIN_MODULE.service('UrlService', UrlService);
MAIN_MODULE.service('FlashService', FlashService);

MAIN_MODULE.directive('compareTo', compareTo);
MAIN_MODULE.directive('validateUrl', validateUrl);

MAIN_MODULE.component('app', app);
MAIN_MODULE.component('home', home);
MAIN_MODULE.component('signUp', signUp);
MAIN_MODULE.component('signIn', signIn);
MAIN_MODULE.component('urlList', urlList);
MAIN_MODULE.component('urlShow', urlShow);
MAIN_MODULE.component('urlNew', urlNew);
MAIN_MODULE.component('modalConfirm', modalConfirm);

