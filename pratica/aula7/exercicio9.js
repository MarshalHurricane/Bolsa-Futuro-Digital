let pessoa = {
    nome: "fulano",
    idade: 20,
    cidade: "rj"
}



for (propriedade in pessoa) {
    console.log(`[${propriedade}]: ${pessoa[propriedade]}`);
}