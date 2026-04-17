let peso = 60
let altura = 1.90

const IMC = peso / (altura ** 2 )

if ( IMC < 18.5)
   console.log("Magreza")
else if (IMC >= 18.5 && IMC <= 24.9 )
   console.log("Saudavel")
else if (IMC >= 25.0 && IMC <= 29.9 )
   console.log("Sobrepeso")
else if (IMC >= 30.0 && IMC <= 34.9 )
   console.log("Obsidade grau I")
else if (IMC >= 35.0 && IMC <= 39.9 )
   console.log("Obsidade grau II")
else 
   console,log("Obsidade grau III")


