// Module que exporta funções de listar livros, emprestar livros e devolver livro 

import readline from 'readline-sync';
import { livros } from './livros.js';



export function listarLivros () {
    console.log('\n-----Lista de livros-----\n');

    livros.forEach(livro => {
        console.log(`${livro.titulo} - ${livro.autor} (${livro.disponivel ? 'Disponivel' : 'Emprestado'})`)
    });

}

listarLivros()


export function emprestarLivro() {
    console.log('-----Emprestar um livro-----');
    const livrosDisponiveis = livros.filter(livro => livro.disponivel);
    
    if (livrosDisponiveis.length === 0) {
        console.log('Nenhum livro disponível para empréstimo.');
        return;
    }

    const titulos = livrosDisponiveis.map(livro => `${livro.titulo} - ${livro.autor}`);
    const indice = readline.keyInSelect(titulos, 'Escolha um livro para emprestar: ');

    if (indice === -1) {
        console.log('Empréstimo cancelado.');
    } else {
        livrosDisponiveis[indice].disponivel = false;
        console.log(`Livro "${livrosDisponiveis[indice].titulo}" foi emprestado com sucesso!`);
    }
}

emprestarLivro()

export function devolverLivro() {
    console.log('-----Devolver um livro-----');
    const livrosEmprestados = livros.filter(livro => !livro.disponivel);
    
    if (livrosEmprestados.length === 0) {
        console.log('Nenhum livro para devolver.');
        return;
    }

    const titulos = livrosEmprestados.map(livro => `${livro.titulo} - ${livro.autor}`);
    const indice = readline.keyInSelect(titulos, 'Escolha um livro para devolver: ');

    if (indice === -1) {
        console.log('Devolução cancelada.');
    } else {
        livrosEmprestados[indice].disponivel = true;
        console.log(`Livro "${livrosEmprestados[indice].titulo}" foi devolvido com sucesso!`);
    }
}

devolverLivro()