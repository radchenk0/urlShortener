import signUpTemplate from './signUp.template.pug';

class SignUpController {
    constructor($auth, FlashService) {
        "ngInject";
        this.$auth = $auth;
        this.FlashService = FlashService;
    }
    
    submit(valid) {
        let { $auth, FlashService } = this;
        let email = this.email;
        let name = this.name;
        let password = this.password;
        if(valid) {
            $auth.submitRegistration({
                name,
                email,
                password
            })
            .then(response => {
                FlashService.addAlert('success', 'You are successfully signed up')
            })
            .catch(response => {
                response.data.errors.full_messages.forEach(message => {
                    FlashService.addAlert('danger', message);
                });
            });
        }
    };
}

export const signUp = {
    controller: SignUpController,
    template: signUpTemplate
};