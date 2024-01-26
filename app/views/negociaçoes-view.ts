import { Negociaçoes } from "../models/negociaçoes.js";
import { View } from "./view.js";

export class NegociaçoesView extends View<Negociaçoes>{

    protected template(model:Negociaçoes):string{
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.Lista().map(negociaçao =>{
                        return`
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociaçao.data)}</td>
                            <td>${negociaçao.quantidade}</td>
                            <td>${negociaçao.valor}</td>
                        </tr>`
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    public reset(): void{
        this.element.innerHTML = `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    `;
    } 
}