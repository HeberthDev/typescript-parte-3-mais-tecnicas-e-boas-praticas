import { Implimivel } from "../utils/imprimivel.js";

export class Negociacao extends Implimivel {
    constructor( 
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor:number
    ) {
        super();
    }

    /* 
        A utilização do STATIC serve para você chamar um determinado método de uma classe sem precisar fazer uma instância de uma classe. Você chamando a própria classe você já acessa o método.
    */
    public static criaDe( dataString: string, quantidadeString: string, valorString: string ): Negociacao {
        const exp = /-/g;
        const date = new Date( dataString.replace( exp, ',' ) );
        const quantidade = parseInt( quantidadeString );
        const valor = parseFloat( valorString );

        return new Negociacao(
            date,
            quantidade,
            valor,
        );
    }

    get volume() {
        return this.quantidade * this.valor;
    }

    /*
        Utilizando pra uma programação defensiva. Onde, se outro desenvolvedor tentar modificar esse valor de data, como por exemplo utilizando "negociacao.data.setDate(12)" onde o desenvolvedor força o dia ser sempre 12, ele não vai conseguir mudar o valor original da data.
    */
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data; 
    }

    public paraTexto(): string {
        return `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `;
    }
}