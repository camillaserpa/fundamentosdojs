const pessoa = {
    nome: 'Camilla',
    idade: 27,
    endereço: {
        logradouro: '123'
    }

}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)
