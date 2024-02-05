import { Negociaçoes } from "../models/negociaçoes.js";
import { Negociaçao } from "../models/negociaçao.js";
import { NegociaçoesView } from "../views/negociaçoes-view.js";
import { MensagemView } from "../views/mensagen-view.js";
import { LogarTempoDeExecução } from "../models/logar-tempo-de-execução.js";

export class NegociaçaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociaçoes = new Negociaçoes();
    private NegociaçaoViwer = new NegociaçoesView('#negociaçoes-view', true);
    private MensagemViwer = new MensagemView('#mensagemView');
    private readonly diasUteis: number[] = [1, 2, 3, 4, 5];

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.NegociaçaoViwer.update(this.negociaçoes);
    }

    @LogarTempoDeExecução(true)
    public Adiciona(): void{
        const negociaçao = Negociaçao.Criar(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
        )

        const diaDaSemana = negociaçao.data.getDay();

        if(this.diasUteis.includes(diaDaSemana)){
            this.negociaçoes.Adicionar(negociaçao);
            this.LimparFormulario();
            this.AtualizaView();
        } else {
            this.MensagemViwer.update('Só é possivel realizar Negociações em dias uteis.');
        }

        setInterval(() => {this.MensagemViwer.AlertOff();}, 8000);
    }

    public LimparLista(): void{
        this.NegociaçaoViwer.reset();
        this.negociaçoes.Reset();
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