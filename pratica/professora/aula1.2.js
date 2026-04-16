let nt1 
let nt2 
let nt3 

function Tirar_Media(nt1, nt2, nt3){
    return (nt1 + nt2 + nt3) / 3
}

const media = Tirar_Media(10, 3, 8)
const nt_trabalho = 10

if ( media >= 8 )
    console.log("Aluno aprovado!")
else if (media >=5 )
        if (media >= 7 && nt_trabalho == 10)
            console.log("Aluno Aprovado!")
        else
        console.log("Aluno em recuperação!")
else 
    console.log("Aluno reprovado!")

console.log("Média final:", media)