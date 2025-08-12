let salariomensal = 100
let idade = 11
bonus1 = salariomensal + 100
bonus2 = salariomensal + 500
bonus3 = salariomensal + 1000


       

if (salariomensal <= 2000) {
    if (salariomensal <= 1000 && idade > 18)
        console.log(`Auxílio financeiro de R$1000,00 concedido. Total do salário: R$${(bonus3).toFixed(2)}`)
    else
        console.log(`Auxílio financeiro de R$500,00 concedido. Total do salário: R$${(bonus2).toFixed(2)}`)    
}

if (salariomensal <= 3000 && salariomensal > 2000) {
    console.log(`Auxílio financeiro de R$100,00 concedido. Total do salário: R$${(bonus1).toFixed(2)}`)
}