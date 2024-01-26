import { Negociaçoes } from "../models/negociaçoes.js";
import { Negociaçao } from "../models/negociaçao.js";
import { NegociaçoesView } from "../views/negociaçoes-view.js";
import { MensagemView } from "../views/mensagen-view.js";

export class NegociaçaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociaçoes = new Negociaçoes();
    private NegociaçaoViwer = new NegociaçoesView('#negociaçoes-view');
    private MensagemViwer = new MensagemView('#mensagemView');
    private readonly diasUteis: number[] = [1, 2, 3, 4, 5];

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.NegociaçaoViwer.update(this.negociaçoes);
    }

    public Adiciona(): void{
        const negociaçao = this.CriarNegociaçao();
        const diaDaSemana = negociaçao.data.getDay();

        if(this.diasUteis.includes(diaDaSemana)){
            this.negociaçoes.Adicionar(negociaçao);
            this.LimparFormulario();
            this.AtualizaView();
        } else {
            this.MensagemViwer.update('Só é possivel realizar Negociações em dias uteis.');
        }
        setInterval(() => {this.MensagemViwer.AlertOff();},  8000);
    }

    public LimparLista(): void{
        this.NegociaçaoViwer.reset();
    }

    private CriarNegociaçao(): Negociaçao{
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociaçao (date, quantidade, valor)
    }

    private LimparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private AtualizaView(): void {
        this.NegociaçaoViwer.update(this.negociaçoes);
        this.MensagemViwer.update("Negociação Registrada com Sucesso!!");
    } 
}