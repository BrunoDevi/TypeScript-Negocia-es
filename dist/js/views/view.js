export class View {
    constructor(selector, escape) {
        this.escapar = false;
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.element = elemento;
        }
        else {
            throw Error(`seletor ${selector} não existe, verifique o id declarado!`);
        }
        if (escape) {
            this.escapar = escape;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.element.innerHTML = template;
    }
    AlertOff() {
        this.element.innerHTML = '';
    }
}
