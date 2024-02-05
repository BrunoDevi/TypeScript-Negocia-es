export class View {
    constructor(selector) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.element = elemento;
        }
        else {
            throw Error(`seletor ${selector} não existe, verifique o id declarado!`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
    AlertOff() {
        this.element.innerHTML = '';
    }
}
