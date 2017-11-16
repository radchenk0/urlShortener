import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngTokenAuth from 'ng-token-auth';
import ipCookies from 'angular-cookie';

const APP_MODULE = angular.module('url-shortener', [
  uiRouter,
  ngTokenAuth,
  ipCookies,
]);