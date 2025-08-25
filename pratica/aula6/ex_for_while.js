/*
Exemplos de loops For e While
*/

// Exemplo próprio feito por mim 

let elementos = ["laranja", "pessego", "uva", "morango", 2]

for(i = 0; i < 10; i++){
    console.log(`a fruta é ${elementos}\n`)
}



//Array com uma lista de cores e precisamos saber o nome e o valor de cada uma das suas propriedades.

let cores = ["azul", "verde", "vermelho", "amarelo"]
for(let index in cores){
    console.log(index, cores[index])
}

/* for ( in ) ~> índice
   for ( of ) ~> valor
*/