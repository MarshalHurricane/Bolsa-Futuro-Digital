/*
    Biblioteca digital 
    1 Classe ~> Livro 
    1 Classe ~> Autor
    relacionamento entre elas :
    1-N, N-N ou 1-1?

    opcional: 1 método para retornar todos os livros do Autor e modulacao separando as classes em cada arquivo. 
*/

import { Autor } from "./Autor";

export class Livro {
    nome: string;
    autor: Autor[];
    editora: string;
    ano: number;

    constructor (nome:string, autor:[],editora:string,ano:number) {
        this.nome = nome;
        this.editora = editora;
        this.ano = ano;
    }
}


const Livro1 = new Livro ("Fundacao", [], "Aleph", 2009)
const Livro2 = new Livro ("FundacaoEImperio", [], "Aleph", 2009)
const Livro3 = new Livro ("SegundaFudacao", [], "Aleph", 2009)
const Livro4 = new Livro ("OHobbit", [], "Tolkien", 1937)