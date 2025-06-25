// Você tem uma lista de jogadores de RPG, cada um com:
// nome, classe, itens → um array com objetos { nome, preco, quantidade }

// ✅ Calcule o valor total dos itens de cada jogador (quantidade × preço, somando todos os itens)

// ✅ Crie um novo array com objetos: { nome, classe, valorTotal }

// ✅ Filtre só os jogadores com valorTotal acima de 150

// ✅ Ordene esse novo array do maior para o menor valorTotal


const jogadores = [
  {
    nome: 'Luna',
    classe: 'Mago',
    itens: [
      { nome: 'Poção', preco: 10, quantidade: 3 },
      { nome: 'Bastão Mágico', preco: 100, quantidade: 1 },
    ],
  },
  {
    nome: 'Thorne',
    classe: 'Guerreiro',
    itens: [
      { nome: 'Espada', preco: 140, quantidade: 1 },
      { nome: 'Poção', preco: 10, quantidade: 2 },
    ],
  },
  {
    nome: 'Eliot',
    classe: 'Arqueiro',
    itens: [
      { nome: 'Arco', preco: 120, quantidade: 1 },
      { nome: 'Poção', preco: 10, quantidade: 5 },
    ],
  },
];

// somando o valor dos items
const multiplica = jogadores.map((player) => player.itens.map((item) => item.quantidade * item.preco))
const valorTotal = multiplica.map((lista) => lista.reduce((total, valor) => total += valor))

// filtrando e os ordenando
const filtrar = valorTotal.filter((pontos) => pontos > 150)
const ordenar = filtrar.sort((a, b) => b - a)

//criando novo array
const newArr = jogadores.map((player, i) => {
  return {
    nome: player.nome,
    classe: player.classe,
    TotalValor: valorTotal[i]
  }
}) 

console.log(newArr)