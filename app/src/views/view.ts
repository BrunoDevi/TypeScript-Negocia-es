import { Inspect } from "../decorators/inspect.js";
import { LogarTempoDeExecução } from "../decorators/logar-tempo-de-execução.js"; 

export abstract class View <T>{
    protected element: HTMLElement;

    constructor(selector:string){
        const elemento = document.querySelector(selector)
        if(elemento){
            this.element = elemento as HTMLElement;
        } else {
            throw Error(`seletor ${selector} não existe, verifique o id declarado!`);
        }
    }

    public update(model:T):void{
        let template = this.template(model);
        this.element.innerHTML = template;
    }

    public AlertOff():void{
        this.element.innerHTML = '';
    }

    protected abstract template(model: T): string;
}