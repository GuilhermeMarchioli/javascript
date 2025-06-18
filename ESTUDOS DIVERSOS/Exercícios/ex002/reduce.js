const numeros = [10, 20, 30, 40];

const soma = numeros.reduce((somaTotal, num) => somaTotal += num, 0)

console.log(soma)