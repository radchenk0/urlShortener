import modalConfirmTemplate from "./modal-confirm.template.pug";

class ModalConfirmController {
    constructor() {
        
    }

    $onInit() {
        this.originalUrl = this.resolve.originalUrl;
    }

    ok() {
        this.close({$value: 'ok'});
    };

    cancel() {
        this.dismiss({$value: 'cancel'});
    };
}

export const modalConfirm = {
    controller: ModalConfirmController,
    template: modalConfirmTemplate,
    bindings: {
        close: '&',
        dismiss: '&',
        resolve: '<'
    }
};