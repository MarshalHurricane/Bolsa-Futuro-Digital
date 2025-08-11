const nota1 = 7.5
const nota2 = 2
const nota3 = 0
let media = (nota1 + nota2 + nota3) / 3

if (media >= 8)
    console.log(`Sua média é ${media.toFixed(2)}. Você está aprovado.`)
else if (media >= 5)
    console.log(`Sua média é ${media.toFixed(2)}. Você está em recuperação.`)
else
    console.log(`Sua média é ${media.toFixed(2)}. Você está reprovado.`)
