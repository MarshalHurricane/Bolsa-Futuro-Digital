import { Livro } from "./Livro";

export class Autor {
    nome: string;
    livros: Livro[];


    constructor (nome:string,) {
        this.nome = nome;
        this.livros = [];
    }

        adicionarLivro(livro: Livro ) {
            this.livros.push(livro);
            console.log(`O Livro ${livro.nome} foi adicionado ao autor ${this.livros}.`)
        }

        mostrarLivros() {
            if (this.livros.length == 0) {
                console.log("Esse autor nao possui livros registrados.");
                return;
            }
            this.livros.forEach(livro => {
                console.log(`Título: ${livro.nome} Ano: ${livro.ano}`)
            })
        }
    
    }
