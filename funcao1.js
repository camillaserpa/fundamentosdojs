console.log(typeof Object)

class produto{}
console.log(typeof produto)

//funcao sem retorno 

function imprimirSoma(a, b) {
    console.log(a + b)

}

imprimirSoma(5, 10)
imprimirSoma(5)
imprimirSoma(5, 10, 1, 3, 5, 6)

// funcao com retorno 
function soma(a, b = 1) {
    return a, b
}

console.log(soma(2,3))
console.log(soma(2))