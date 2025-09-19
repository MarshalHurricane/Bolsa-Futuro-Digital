import { Autor } from "./Autor";

export class Livro {
    nome: string;
    autores: Autor[];
    editora: string;
    ano: number;

    constructor (nome:string,editora:string,ano:number) {
        this.nome = nome;
        this.editora = editora;
        this.ano = ano;
        this.autores = [];
    }

        adicionarAutor(autor: Autor) {
            this.autores.push(autor);
            autor.adicionarLivro(this);
            console.log(`O autor ${autor.nome} foi adicionado ao livro ${this.nome}.`);
        }
        mostrarAutores() {
            if (this.autores.length == 0) {
                console.log ("Esse livro nao possui autores registrados.");
                return;
            }
                this.autores.forEach(autor => {
                    console.log(`Autor: ${autor.nome}.`);

                })
            }
        }




const Livro1 = new Livro ("Fundacao", "Aleph", 2009);
const Livro2 = new Livro ("FundacaoEImperio", "Aleph", 2009);
const Livro3 = new Livro ("SegundaFudacao", "Aleph", 2009);
const Livro4 = new Livro ("OHobbit", "Tolkien", 1937);