export abstract class View <T>{
    protected element: HTMLElement;
    private escapar = false;

    constructor(selector:string, escape?:boolean){
        this.element = document.querySelector(selector) as HTMLElement;
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