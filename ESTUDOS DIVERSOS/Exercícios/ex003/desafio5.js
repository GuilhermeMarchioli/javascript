//Encontre o item chamado “Master Ball” e diga a posição dele no inventário.

const inventario = [
  'Potion',
  'Super Potion',
  'Ultra Ball',
  'Master Ball',
  'Revive',
];

const find = inventario.find((item) => item === 'Master Ball')
const Index = inventario.findIndex((item) => item === 'Master Ball')

console.log(find)
console.log(`Indice: ${Index}`)