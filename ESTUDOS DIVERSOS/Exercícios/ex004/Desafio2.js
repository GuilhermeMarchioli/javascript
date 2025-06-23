// Você tem um array de objetos item com nome e quantidade.
// Some o total de todas as quantidades com reduce.
// Depois use map para criar um array de strings no formato "nome: quantidade".

const inventario = [
  { nome: 'Potion', quantidade: 5 },
  { nome: 'Poké Ball', quantidade: 12 },
  { nome: 'Revive', quantidade: 3 },
];

const soma = inventario.reduce((total, item) => total += item.quantidade, 0)

const map = inventario.map((item) => `${item.nome}: ${item.quantidade} `)

console.log(map)
console.log(`TOTAl: ${soma}`)