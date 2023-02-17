const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.00
prod1['Desconto legal'] = 9.40 //evitar atributos com espaço, exemplo apenas para demonstrar que é possivel

console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
}

console.log(prod2)
console.log(typeof prod1, prod2)