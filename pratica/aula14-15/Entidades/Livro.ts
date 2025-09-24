import { Autor } from "./Autor";

export class Livro {
    nome: string;
    autores: Autor[] = [];
    editora: string;
    ano: number;

    constructor (nome:string,editora:string,ano:number) {
        this.nome = nome;
        this.editora = editora;
        this.ano = ano;
    }

        public adicionarAutor(autor: Autor) {
            if (!this.autores.includes(autor)) {
                this.autores.push(autor);
                autor.adicionarLivro(this);
                console.log(`O autor ${autor.nome} foi adicionado ao livro ${this.nome}.`);
            }
  
        }
        public adicionarAutores(listaDeAutores: Autor[]) {
            listaDeAutores.forEach(autor => {
            this.adicionarAutor(autor);
        });
    }
        public mostrarAutores() {
            if (this.autores.length === 0) {
                console.log ("Esse livro nao possui autores registrados.");
                return;
            }
                this.autores.forEach(autor => {
                    console.log(`Autor: ${autor.nome}.`);

                })
            }
}