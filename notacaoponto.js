console.log(Math.ceil(6.1))

const Obj1 = {}
Obj1.nome = 'Boia'

console.log(Obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const Obj2 = new Obj('cadeira')
const Obj3 = new Obj('mesa')
console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()