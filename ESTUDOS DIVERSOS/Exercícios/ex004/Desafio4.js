// Dado um array de números:
// Crie um novo array que transforma cada número em um objeto { original: n, quadrado: n*n } com map.
// Filtre apenas os objetos onde quadrado é par.
// Retorne só os valores de quadrado num array.

const numeros = [1, 2, 3, 4, 5];

const map = numeros.map((num) => {
    return{
    original: num,
    quadrado: num * num
    }
})

const filter = map.filter((n) => n.quadrado % 2 == 0 )
valorQuadrado = filter.map((num) => num.quadrado)

console.log(valorQuadrado)