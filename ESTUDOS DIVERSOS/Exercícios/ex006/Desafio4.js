//Você tem um array de guildas, cada uma com:
//nome, região, membros: array com objetos { nome, ouro, nivel }
const guildas = [
  {
    nome: 'Lâminas de Prata',
    região: 'Norte',
    membros: [
      { nome: 'Thom', ouro: 70, nivel: 10 },
      { nome: 'Elena', ouro: 140, nivel: 12 },
    ],
  },
  {
    nome: 'Olhos do Crepúsculo',
    região: 'Sul',
    membros: [
      { nome: 'Juno', ouro: 160, nivel: 15 },
      { nome: 'Kael', ouro: 90, nivel: 14 },
    ],
  },
  {
    nome: 'Guardas de Fogo',
    região: 'Oeste',
    membros: [
      { nome: 'Bryn', ouro: 60, nivel: 9 },
      { nome: 'Eryn', ouro: 120, nivel: 8 },
    ],
  },
];


//Calcule quanto ouro total cada guilda tem.
const totalOuro = guildas.map((guilda) => guilda.membros.reduce((totalMoney, money) => totalMoney += money.ouro, 0))

//Crie um array com { nome, ouroTotal }
const newArr = guildas.map((guilda, i) => {
    return {
        nome: guilda.nome,
        ouroTotal: totalOuro[i]
    }
})

//Filtre as guildas com mais de 200 de ouro.
const filtro = newArr.filter((player) => player.ouroTotal > 200)

//Ordene da mais rica pra mais pobre.
const ordenar = filtro.sort((a, b) => b.ouroTotal - a.ouroTotal)

console.log(ordenar)