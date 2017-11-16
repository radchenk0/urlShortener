// modules import
require('ngstorage');
import collapse from 'angular-ui-bootstrap/src/collapse';
import popover from 'angular-ui-bootstrap/src/popover';
import alert from 'angular-ui-bootstrap/src/alert';
import modal from 'angular-ui-bootstrap/src/modal';
import ngMessages from 'angular-messages';
import ngClipboard from 'ngclipboard';


// services import
import { FlashService } from './components/app/flash.service';
export const MAIN_MODULE = angular.module('main', [
  'ngStorage',
  collapse,
  popover,
  alert,
  modal,
  ngMessages,
  ngClipboard
]);

MAIN_MODULE.config(($uiRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  $uiRouterProvider.trace.enable(1);
});

MAIN_MODULE.service('FlashService', FlashService);

