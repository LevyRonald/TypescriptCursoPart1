import { Negociacao } from './negociacao.js';

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    Adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[]{
        return [...this.negociacoes];
    }
}
