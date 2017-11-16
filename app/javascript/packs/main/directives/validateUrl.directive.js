export function validateUrl() {
    
      let URL_REGEXP = /^((?:http|ftp)s?:\/\/)(?:(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::\d+)?(?:\/?|[\/?]\S+)$/i;
      let validator = value => {
        if (!URL_REGEXP.test(value) && URL_REGEXP.test('http://' + value)) {
          return 'http://' + value;
        } 
        else {
          return value;
        }
      };
    
      return {
        restrict: 'A',
        require: '?ngModel',
        link: (scope, element, attrs, ngModel) => {
          let allowSchemelessUrls = () => {  
            ngModel.$parsers.unshift(validator);
            ngModel.$validators.url = value => {
              return ngModel.$isEmpty(value) || URL_REGEXP.test(value);
            };
          }
          if (ngModel && attrs.type === 'url') {
            allowSchemelessUrls();
          }
        }
      }
};