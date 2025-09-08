// Module que exporta funções de listar livros, emprestar livros e devolver livro 

import readline from 'readline-sync';
import { livros } from './livros.js';



export function listarLivros () {
    console.log('\n-----Lista de livros-----\n');

    livros.forEach(elemento => {
        console.log(`${elemento.titulo}`)
    });

}

listarLivros()


export function emprestarLivro() {
    if ()
}

export function devolverLivro() {

}

