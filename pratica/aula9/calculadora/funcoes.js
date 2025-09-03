//exportando  para 'main.js'

export function soma (n1, n2) {
    return n1 + n2;
}

export function subtracao (n1, n2) {
    return n1 - n2;
}

export function multiplicacao (n1, n2) {
    return n1 * n2;
}

export function divisao (n1, n2) {
    if (n2 === 0) {
        console.log("Divisao por 0, resultado indeterminado.");
        return false;
        

        
    }
    return n1 / n2;
}


