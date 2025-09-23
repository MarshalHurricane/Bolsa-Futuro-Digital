import { Cliente } from "./cliente";

export class Corte {
    public nomeCorte : string;
    public valorCorte : number;

    constructor (nomeCorte: string, valorCorte: number) {
        this.nomeCorte = nomeCorte;
        this.valorCorte = valorCorte;
    }

    valorTotal() {
            if () {

            }
    }

}

const corte1 = new Corte ("Low Fade", 30);
const corte2 = new Corte ("Undercut", 35);
const corte3 = new Corte ("Mullet", 25);
const corte4 = new Corte ("Corte Social", 20);