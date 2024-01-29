export class View {
    constructor(selector, escape) {
        this.escapar = false;
        this.element = document.querySelector(selector);
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
