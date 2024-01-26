import { Negociaçao } from "./negociaçao.js";

export class Negociaçoes {
    private negociaçoes: Array<Negociaçao> = [];

    public Adicionar(negociaçao: Negociaçao){
        this.negociaçoes.push(negociaçao)
    }

    public Remover(index:number): void{
        this.negociaçoes.splice(index)
    }

    public Lista(): ReadonlyArray<Negociaçao>{
        return this.negociaçoes
    }
}
