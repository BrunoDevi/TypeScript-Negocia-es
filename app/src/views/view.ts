import { Inspect } from "../decorators/inspect.js";
import { LogarTempoDeExecução } from "../decorators/logar-tempo-de-execução.js"; 

export abstract class View <T>{
    protected element: HTMLElement;
    private escapar = false;

    constructor(selector:string, escape?:boolean){
        const elemento = document.querySelector(selector)
        if(elemento){
            this.element = elemento as HTMLElement;
        } else {
            throw Error(`seletor ${selector} não existe, verifique o id declarado!`);
        }
        if(escape){
            this.escapar = escape;
        }
    }

    public update(model:T):void{
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.element.innerHTML = template;
    }

    public AlertOff():void{
        this.element.innerHTML = '';
    }

    protected abstract template(model: T): string;
}