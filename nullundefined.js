let valor // não inicializada
console.log(valor)

valor = null // ausência de valor 
console.log(valor)

const produto = {
    preco: 3.50
}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir de forma explicita
console.log(!!produto.preco)
// delete (produto.preco) para tirar o atributo de um objeto 
console.log(produto)

produto.preco = null //sem preco


let a = 6
let b = a
b++;
console.log(a,b)

const c = 'Camilla'
const d = c
d2 = 'Camilla'
console.log(c)
console.log(d2)
