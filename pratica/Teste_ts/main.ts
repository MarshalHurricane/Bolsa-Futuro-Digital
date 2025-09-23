import { Endereco } from "./Entidades/Endereco";
import { Pessoa } from "./Entidades/Pessoa";

const endereco1 = new Endereco("2551455", "rio de janeiro", "nikiti", "icarai", "rua vamos todos")
const karol = new Pessoa("karol", 25 , "399")
const victor = new Pessoa("victor", 30 , "1001")

endereco1.Pessoas.push(karol, victor)

console.log(`No endereco: ${endereco1.Bairro} , ${endereco1.Rua}`);
endereco1.Pessoas.forEach(element => {
    console.log(element)
});
