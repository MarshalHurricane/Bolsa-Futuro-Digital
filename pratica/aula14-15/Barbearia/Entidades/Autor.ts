import { Livro } from "./livro";

export class Autor {
    public nome: string;
    public livros: Livro[] = [];


    constructor (nome:string) {
        this.nome = nome;
    }

    public adicionarLivro(livro: Livro ) {
        if (!this.livros.includes(livro)) {
            this.livros.push(livro);
            console.log(`O livro ${livro.nome} foi adicionado ao autor ${this.nome}`)
        }
        
    }

    public mostrarLivros() {
        console.log(`Livros do autor ${this.nome}:\n`)
        if (this.livros.length === 0) {
            console.log("Esse autor nao possui livros registrados.");
            return;
        }
        this.livros.forEach(livro => {
            console.log(`Título: ${livro.nome} Ano: ${livro.ano}`);
        })
    }
    
}
