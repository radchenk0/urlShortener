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
{
  parent: 'app',
  name: 'new',
  url: '/urls/new',
  component: 'urlNew',
  resolve: {
    user: $auth => {
      return $auth.validateUser();
    }
  }
}
];