import { Livro } from "./livro";
import { Usuario } from "./Usuario";

export class Emprestimo {

    private static emprestimosAtivos: Emprestimo[] = [];

    public static checarDisponibilidade(livro: Livro): boolean {

        const indisponivel = this.emprestimosAtivos.some(emprestimo => emprestimo.livro === livro);
        return !indisponivel;
    }

    public static emprestar(livro: Livro, usuario: Usuario): Emprestimo | null {
        console.log(`\nTentando emprestar "${livro.nome}" para ${usuario.nome}...`);
        
        if (this.checarDisponibilidade(livro)) {
            const novoEmprestimo = new Emprestimo(livro, usuario);
            
            this.emprestimosAtivos.push(novoEmprestimo);
            
            console.log(`Livro "${livro.nome}" emprestado para ${usuario.nome}.`);
            return novoEmprestimo;
        } else {
            console.log(`O livro "${livro.nome}" não está disponível.`);
            return null;
        }
    }

    public livro: Livro;
    public usuario: Usuario;

    //  Aprendendo que o construtor está private pra garantir o uso do método estático "emprestar" ...
    //  ... e que ninguém possa criar um "Emprestimo" sem passar pela verificação.
    private constructor(livro: Livro, usuario: Usuario) {
        this.livro = livro;
        this.usuario = usuario;
    }

    public devolver() {
        console.log(`\nDevolvendo o livro "${this.livro.nome}"`);

        Emprestimo.emprestimosAtivos = Emprestimo.emprestimosAtivos.filter(
            emprestimo => emprestimo !== this
        );
        
        console.log(`O livro "${this.livro.nome}" foi devolvido e agora está disponível para empréstimo.`);
    }
}