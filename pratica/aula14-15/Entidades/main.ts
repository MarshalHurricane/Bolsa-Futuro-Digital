/*
    Biblioteca digital 
    1 Classe ~> Livro 
    1 Classe ~> Autor
    relacionamento entre elas :
    1-N, N-N ou 1-1?

    opcional: 1 método para retornar todos os livros do Autor
    Modulacao separando as classes em cada arquivo. 
*/

import { Livro } from "./Livro";
import { Autor } from "./Autor";
import { Usuario } from "./Usuario";
import { Emprestimo } from "./Emprestimo"; 


const livro1 = new Livro ("Fundacao", "Aleph", 2009);
const livro2 = new Livro ("Fundacao E Imperio", "Aleph", 2009);
const livro3 = new Livro ("Segunda Fudacao", "Aleph", 2009);
const livro4 = new Livro ("O Hobbit", "GeorgeAllen&UnwinLtd", 1937);
const livro5 = new Livro ("Sonho De Uma Noite De Verao", "L&PMPocket",2001);
const livro6 = new Livro ("Hamlet", "PinguimCompanhia", 2015);
const livro7 = new Livro ("Biologia Molecular Da Celula", "artmed", 2017);
const autor1 = new Autor ("Isaac Asimov");
const autor2 = new Autor ("Tolkien");
const autor3 = new Autor ("Shakespeare");
const autoresBiologiaMolecularDaCelula = [
    new Autor("Bruce Alberts"), new Autor("Alexander Johnson"),
    new Autor("Julian Lewis"), new Autor("David Morgan"),
    new Autor("Martin Raff"), new Autor("Keith Roberts"),
    new Autor("Peter Walter"), new Autor("John Wilson"),
    new Autor("Tim Hunt")
]
livro7.adicionarAutores(autoresBiologiaMolecularDaCelula);

livro1.adicionarAutor(autor1);
livro2.adicionarAutor(autor1);
livro3.adicionarAutor(autor1);
livro4.adicionarAutor(autor2);
livro5.adicionarAutor(autor3);
livro6.adicionarAutor(autor3);

const usuario1 = new Usuario ("Renato", 2344, "(21)9864-4923");
const usuario2 = new Usuario ("Claudio", 4345, "(21)9488-9478");
const usuario3 = new Usuario ("Leticia", 9999, "(21)3231-4132");
const usuario4 = new Usuario ("Rosangela", 4452, "(21)5847-4872");
const usuario5 = new Usuario ("Pedro", 2222, "(21)9480-8778");
const usuario6 = new Usuario ("Arthur", 1111, "(21)9453-0434");

autor1.mostrarLivros();
autor2.mostrarLivros();
autor3.mostrarLivros();
livro7.mostrarAutores();

const emprestimo1 = Emprestimo.emprestar(livro1, usuario1);
const emprestimo2 = Emprestimo.emprestar(livro2, usuario2);
const emprestimo3 = Emprestimo.emprestar(livro3, usuario3);
const emprestimo4 = Emprestimo.emprestar(livro4, usuario3);
const emprestimo5 = Emprestimo.emprestar(livro5, usuario4);

//Testando emprestar livro que já foi emprestado:
const emprestimo6 = Emprestimo.emprestar(livro5, usuario5);
if (emprestimo5) {
    emprestimo5.devolver()
    } else {
            console.log("Não foi possível realizar a devolução, pois o empréstimo não foi bem-sucedido.");
}


//Testando emprestar após a devolução do livro:
const emprestimo7 = Emprestimo.emprestar(livro5, usuario5);

const emprestimo8 = Emprestimo.emprestar(livro6, usuario6);
const emprestimo9 = Emprestimo.emprestar(livro7, usuario6);

