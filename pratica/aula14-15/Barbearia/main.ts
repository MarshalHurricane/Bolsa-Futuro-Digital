import { Corte } from "./corte";
import { Funcionario } from "./funcionario";
import { Cliente } from "./cliente";
import { Atendimento } from "./atendimento";

const cliente1 = new Cliente ("Arthur", 17);
const cliente2 = new Cliente ("Thiago", 23);
const cliente3 = new Cliente ("Heitor", 45);
const cliente4 = new Cliente ("Carlos", 8);
const funcionario1 = new Funcionario ("Jefferson", 3243);
const funcionario2 = new Funcionario ("Fabricio", 2365);
const funcionario3 = new Funcionario ("Jose", 4523);
const funcionario4 = new Funcionario ("Cleber", 8789);
const corte1 = new Corte ("Low Fade", 30);
const corte2 = new Corte ("Undercut", 35);
const corte3 = new Corte ("Mullet", 25);
const corte4 = new Corte ("Corte Social", 20);

const atendimento1 = new Atendimento(cliente1, funcionario1, corte1);
const atendimento2 = new Atendimento(cliente2, funcionario2, corte4);
const atendimento3 = new Atendimento(cliente3, funcionario3, corte2);
const atendimento4 = new Atendimento(cliente4, funcionario4, corte3);   

atendimento1.exibirDetalhes();
atendimento2.exibirDetalhes();
atendimento3.exibirDetalhes();
atendimento4.exibirDetalhes();