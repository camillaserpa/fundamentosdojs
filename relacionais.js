console.log('01)', '1' == 1) // igual igual a 1
console.log('01)', '1' === 1) // estritamente igual a 1
console.log('03)', '3' != 3) // diferente de 3
console.log('04)', '3' !==3) // estritamente diferente de 3

console.log('05)', 3 < 2) // menor
console.log('06)', 3 > 2) // maior
console.log('07)', 3 <= 2) // menor igual 
console.log('08)', 3 >= 2) // maior igual 

const d1 = new Date(0) //significa a data de referencia do JS 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() == d2.getTime()) //numbers retornan true

console.log('12)', undefined == null)
console.log('13)', undefined === null)