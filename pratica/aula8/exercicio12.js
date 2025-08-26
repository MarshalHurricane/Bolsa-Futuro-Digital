/* 
    1 - Você tem um array de números. Use o forEach para imprimir no console o dobro de cada número.

(Diferentes formas de criar funções de callback forEach)

Aprender a diferenciar:
for in em "Array"
for in em objetos
*/


let numeros = [10, 20, 30, 40, 50]

numeros.forEach(function(elemento) {
    elemento *= 2
    console.log(elemento)
})


numeros.forEach((elemento) => {
    elemento *= 2
    console.log(elemento)
})   

