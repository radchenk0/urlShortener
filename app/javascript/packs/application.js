import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngTokenAuth from 'ng-token-auth';
import ipCookies from 'angular-cookie';
import { MAIN_MODULE } from './main/main.module';

import '../src/application.css';

const APP_MODULE = angular.module('url-shortener', [
  uiRouter,
  ngTokenAuth,
  ipCookies,
  MAIN_MODULE.name
]);