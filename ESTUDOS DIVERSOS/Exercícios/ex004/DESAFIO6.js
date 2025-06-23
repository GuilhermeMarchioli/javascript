// BÔNUS (Mistura geral!)
// Você tem um array de scores numéricos.
// Remova duplicatas (use filter + indexOf).
// Ordene do maior para o menor.
// Some todos os scores com reduce.

const scores = [10, 20, 20, 5, 30, 10];

const removeClone = scores.filter((num, index) => index == scores.indexOf((num)) )
const ordernar = removeClone.sort((a, b) => b - a)
const soma = ordernar.reduce((total, num) => total += num, 0)

console.log(soma)