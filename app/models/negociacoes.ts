import { Negociacao } from './negociacao.js';

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    Adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{
        return [...this.negociacoes];
    }
}
