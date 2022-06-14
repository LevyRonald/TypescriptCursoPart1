export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    Adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes];
    }
}
