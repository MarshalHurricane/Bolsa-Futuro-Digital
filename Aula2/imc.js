let peso = 80
let altura = 1.8
let imc = (peso / (altura ** 2))

if (imc < 18.5)
 console.log("Magreza")
else if (imc >= 18.5 &&  imc <= 24.9)
 console.log("Saudável")
else if (imc >= 25.0 && imc <= 29.9)
 console.log("Sobrepeso") 
else if (imc >= 30.0 && imc <= 34.9)
 console.log("Obesidade grau I")
else if (imc >= 35.0 && imc <= 39.9)
 console.log("Obesidade grau II")
else 
 console.log("Obesidade grau III")
