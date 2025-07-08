//DESAFIO 3 – ITENS DE RPG LENDÁRIOS

const itens = [
  { nome: 'Espada da Luz', tipo: 'arma', raridade: 'lendário', valor: 300 },
  { nome: 'Poção de Vida', tipo: 'consumível', raridade: 'comum', valor: 10 },
  { nome: 'Armadura de Dragão', tipo: 'armadura', raridade: 'lendário', valor: 500 },
  { nome: 'Anel de Proteção', tipo: 'acessório', raridade: 'raro', valor: 150 },
];

// Filtrar apenas itens de raridade "lendário".
const filtrar = itens.filter((item) => item.raridade === 'lendário')

// Criar um novo array com { nome, tipo, valor }.
const newArr = filtrar.map((item) => {
    return {
        nome: item.nome,
        tipo: item.tipo,
        valor: item.valor
    }
})

// Somar o valor total desses itens.
const somar = newArr.reduce((total, item ) => total += item.valor, 0)

// (Opcional) Mostrar o item mais caro.
const Opcional = newArr.filter((item) => item.valor > 300)

console.log(Opcional)