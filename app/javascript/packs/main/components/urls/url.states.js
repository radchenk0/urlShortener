export const urlStates = [{
  parent: 'app',
  name: 'list',
  url: '/urls',
  component: 'urlList',
  resolve: {
    user: $auth => $auth.validateUser(),
    urls: (UrlService) => {
      return UrlService.getUrls()
    }
  }
},
];