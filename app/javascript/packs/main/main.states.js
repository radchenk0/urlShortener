import { appState } from './components/app/app.state';
import { homeState } from './components/home/home.state';
import { signUpState } from './components/signUp/signUp.state';
import { signInState } from './components/signIn/signIn.state';
import { urlStates } from './components/urls/url.states';

export const mainStates = [
    appState,
    homeState,
    signUpState,
    signInState,
    // {
    //     name: 'redirector',
    //     url: '/{slug:[0-9a-zA-Z]{1,}}',
    //     onEnter: ($stateParams, $http, $state, $log, $rootScope, $timeout) => {
            
    //         switch ($stateParams.slug) {
    //             case 'signIn':
    //                 $state.go('signIn');
    //                 break;
    //             case 'signUp':
    //                 $state.go('signUp');
    //                 break;
    //             case 'urls':
    //                 $state.go('list')
    //                 break;
    //             default:
    //                 $http.get('/' + $stateParams.slug).then(
    //                     successCallback => {},
    //                     errorCallback => {
    //                         $state.go('home');
    //                     }
    //                 );
    //                 break;
    //         }
    //     }
    // },
    ...urlStates
];