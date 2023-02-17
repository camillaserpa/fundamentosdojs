const saudacao = 'Opa' // contexto léxico

function exec() {
    const saudacao = "Fala ai" // contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de par nome valor
const cliente = {
    nome: 'Camilla',
    peso: 65,
    idade: 27,
    endereço: {
        logradouro: 123,

    }
}
console.log(saudacao)
console.log(exec())
console.log(saudacao)
console.log(cliente)
