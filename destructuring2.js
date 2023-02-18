const [a] = [10]
console.log(a)

const [n1, n2, n3, n4, n5 = 0] = [10, 20, 30, 40]
console.log(n1, n2, n3, n4, n5)

const [, [, nota ]] = [[1, 2, 3], [4, 5, 6]]
console.log(nota)