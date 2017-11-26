export const urlStates = [{
  parent: 'app',
  name: 'list',
  url: '/urls',
  component: 'urlList',
  resolve: {
    user: function($auth) {
      "ngInject";
      return $auth.validateUser();
    }, 
    urls: function(UrlService) {
      "ngInject";
      return UrlService.getUrls();
    }
  }
},
{
  parent: 'app',
  name: 'show',
  url: '/urls/{id}',
  component: 'urlShow',
  resolve: {
    user: function($auth) {
      "ngInject";
      return $auth.validateUser();
    },
    url: function(UrlService, $transition$) {
      "ngInject";
      return UrlService.getUrl($transition$.params().id);
    }
  }
},
{
  parent: 'app',
  name: 'new',
  url: '/urls/new',
  component: 'urlNew',
  resolve: {
    user: function($auth) {
      "ngInject";
      return $auth.validateUser();
    }
  }
}
];