import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { MensaegemView } from "../views/mensagem-view.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView( '#negociacoesView' );
    private mensagemView = new MensaegemView( '#mensagemView' );

    constructor() {
        /*
            Numa situação que uma determinada variável pode ser um determinado tipo ou NULL ativamos a opção de "strictNullChecks" no arquivo TSCONFIG e colocamos de forma explícita "as HTMLInputElement" como forma de assegurar que será desse tipo. Apesar da possibilidade de ser NULL também e talvez quebrar o código.
        */
        this.inputData = document.querySelector( '#data' ) as HTMLInputElement;
        this.inputQuantidade = document.querySelector( '#quantidade' ) as HTMLInputElement;
        this.inputValor = document.querySelector( '#valor' ) as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @logarTempoDeExecucao()
    public adiciona(): void {
        /*
            const negociacaoTemporaria = new Negociacao( null, 0, 0 ); Não precisa mais criar essa instância da classe porque pelo método ter se tornado STATIC dentro da classe, é preciso apenas chamar a classe direto e já terá acesso. 
        */
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        /*
            negociacao.data.setDate(12); Exemplo de tentativa de modificação forçada do valor de data
        */
        if( !this.ehDiaUtil( negociacao.data ) ) {
            this.mensagemView.update( 'Apenas negociações em dias úteis são aceitas' );
            return;
        }

        this.negociacoes.adiciona( negociacao );
        this.limparFormulario();
        this.atualizaView();
    }

    private ehDiaUtil( data: Date ) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update( this.negociacoes );
        this.mensagemView.update( 'Negociação adicionada com sucesso' );
    }
}