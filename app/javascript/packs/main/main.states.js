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
    ...urlStates
];