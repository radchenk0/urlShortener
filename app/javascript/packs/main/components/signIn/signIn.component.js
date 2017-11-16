import signInTemplate from "./signIn.template.pug";

class SignInController {
    constructor($auth, FlashService) {
        this.$auth = $auth;
        this.FlashService = FlashService;
    }

    submit(valid) {
        let { $auth, FlashService } = this;
        let email = this.email;
        let password = this.password;
        if(valid) {
            $auth.submitLogin({email, password})
            .then(response => {
                FlashService.addAlert('success', 'Welcome! You are successfully signed in')
            })
            .catch(response => {
                response.errors.forEach(message => {
                    FlashService.addAlert('danger', message);
                });
            });
        }
    }
}

SignInController.$inject = ['$auth', 'FlashService'];

export const signIn = {
    controller: SignInController,
    template: signInTemplate
};