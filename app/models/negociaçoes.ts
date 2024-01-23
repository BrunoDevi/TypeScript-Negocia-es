import { Negociaçao } from "./negociaçao.js";

export class Negociaçoes {
    private negociaçoes: Array<Negociaçao> = [];

    Adicionar(negociaçao: Negociaçao){
        this.negociaçoes.push(negociaçao)
    }

    Remover(index:number): void{
        this.negociaçoes.splice(index)
    }

    Lista(): ReadonlyArray<Negociaçao>{
        return this.negociaçoes
    }
}
