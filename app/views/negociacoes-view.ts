import { escapar } from "../decorators/escapar.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    @escapar
    // Está como protected também, igual a classe "mãe" View, porquê a classe filha se não colocar nada, de forma implícita é public. Então a classe filha está mudando um método protected pra public. Por isso que temos que colocar "protected" nas classes filhas também para não ser visto por outro lugares que não poderia ver sem necessidade.
    protected template( model: Negociacoes ): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th> DATA </th>
                        <th> QUANTIDADE </th>
                        <th> VALOR </th>
                    </tr>
                </thead>

                <tbody>
                    ${model.lista().map( negociacao => {
                        return `
                            <tr>
                                <td> ${ this.formatar( negociacao.data ) } </td>

                                <td> ${ negociacao.quantidade } </td>

                                <td> ${ negociacao.valor } </td>
                            </tr>
                            <script> alert('Oi') </script>
                        `
                    }).join('')}
                </tbody>
            </table>
        `
    }

    private formatar( data: Date ) {
        return new Intl.DateTimeFormat().format( data );
    }
}