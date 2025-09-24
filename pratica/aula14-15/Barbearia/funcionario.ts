export class Funcionario {
    public nome : string;
    public matricula : number;

    constructor(nome: string, matricula: number) {
        this.nome = nome
        this. matricula = matricula
    }
}

const funcionario1 = new Funcionario ("Jefferson", 3243);
const funcionario2 = new Funcionario ("Fabricio", 2365);
const funcionario3 = new Funcionario ("Jose", 4523);
const funcionario4 = new Funcionario ("Cleber", 8789);