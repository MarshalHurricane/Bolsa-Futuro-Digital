export class Produto {
    constructor(
        public nome: string,
        public especificacao: string,
        public preco: number,
        public quantidade: number,
        public id?: number
    ) {}
}