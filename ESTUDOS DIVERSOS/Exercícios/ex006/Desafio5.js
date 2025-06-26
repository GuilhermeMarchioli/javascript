//Você tem um array de pedidos de forja:
// { cliente, itens: array com { nome, preco, prioridade (baixa, media, alta) } }
const pedidos = [
  {
    cliente: 'Ragnar',
    itens: [
      { nome: 'Machado', preco: 100, prioridade: 'alta' },
      { nome: 'Elmo', preco: 70, prioridade: 'media' },
    ],
  },
  {
    cliente: 'Freya',
    itens: [
      { nome: 'Cajado', preco: 120, prioridade: 'baixa' },
      { nome: 'Orbe Mágico', preco: 90, prioridade: 'alta' },
    ],
  },
  {
    cliente: 'Gunnar',
    itens: [
      { nome: 'Espada Curta', preco: 80, prioridade: 'media' },
      { nome: 'Poção', preco: 20, prioridade: 'baixa' },
    ],
  },
];

//Calcule o custo total de cada pedido.
const custoTotal = pedidos.map((player) => player.itens.reduce((total, item) => total += item.preco, 0))

//Filtre apenas pedidos que têm pelo menos um item de prioridade alta.
const filtro = pedidos.filter((pedido) =>
  pedido.itens.some((item) => item.prioridade === "alta"))

//Crie um array com { cliente, totalPedido }
const newArr = filtro.map((pedido) => {
  const totalPedido = pedido.itens.reduce((total, item) => total + item.preco, 0);
  return {
    cliente: pedido.cliente,
    totalPedido: totalPedido
  };
});

//Ordene pelo total do pedido, do maior para o menor.
const ordenar = newArr.sort((a, b) => b.totalPedido - a.totalPedido)

console.log(ordenar)