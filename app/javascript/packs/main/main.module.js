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

// services import
import { UrlService } from './components/urls/url.service';
import { FlashService } from './components/app/flash.service';

// directives import
import { compareTo } from './directives/compareTo.directive';

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

});

MAIN_MODULE.service('UrlService', UrlService);
MAIN_MODULE.service('FlashService', FlashService);

MAIN_MODULE.directive('compareTo', compareTo);

MAIN_MODULE.component('app', app);
