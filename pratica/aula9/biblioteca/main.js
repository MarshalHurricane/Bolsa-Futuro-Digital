import readline from 'readline-sync';
import { livros } from './livros.js';
import { listarLivros, emprestarLivro, devolverLivro } from './funcoes.js';

function exibirMenu() {
    const opcoes = [
        'Listar livros',
        'Emprestar um livro',
        'Devolver um livro',
        'Sair'
    ];
    
    console.log('\n-----Sistema de Gerenciamento de Livros-----');
    const indice = readline.keyInSelect(opcoes, 'Escolha uma opcao: ', { cancel: false });
    
    return indice;
}

function main() {
    let continuar = true;
    
    while (continuar) {
        const opcao = exibirMenu();
        
        switch (opcao) {
            case 0: 
                listarLivros();
                break;
            case 1: 
                emprestarLivro();
                break;
            case 2: 
                devolverLivro();
                break;
            case 3: 
                console.log('Saindo do sistema...');
                continuar = false;
                break;
            default:
                console.log('Opcao invalida, tente novamente.');
        }
    }
}

main();