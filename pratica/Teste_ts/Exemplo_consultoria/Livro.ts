import { Autor } from "./Autor"

export class Livro{
    Titulo: string
    Autores: Autor[] 

    constructor(titulo: string, autores: Autor[] = [] ){
        this.Titulo = titulo
        this.Autores = autores
    }

    AdicionarAutor(autor: Autor){
        return this.Autores.push(autor)
    }

}

/*
-instaciando dentro de livro = 
const lv = new Livro("game of thrones", [new Autor("karol"), ...])


- instanciando dentro de metodo =
const livro1 = new Livro("harry potter")
const autor = new Autor("fernandinho")
livro1.AdicionarAutor(autor)


- instanciando com metodo de array push =
autores = []
const livro1 = new Livro("harry potter")
const autor = new Autor("fernandinho")

livro1.autores.push(livro1, livro2 ...)
*/




