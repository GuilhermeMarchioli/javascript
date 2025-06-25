// Você tem uma lista de heróis, cada um com:
// nome, classe, ataques: array de objetos { nome, danoBase, critico (boolean) }
const herois = [
  {
    nome: 'Emy',
    classe: 'Arqueira',
    ataques: [
      { nome: 'Flecha Veloz', danoBase: 40, critico: false },
      { nome: 'Disparo Duplo', danoBase: 30, critico: true },
    ],
  },
  {
    nome: 'Ragner',
    classe: 'Guerreiro',
    ataques: [
      { nome: 'Corte Pesado', danoBase: 60, critico: true },
      { nome: 'Investida', danoBase: 50, critico: false },
    ],
  },
  {
    nome: 'Lyra',
    classe: 'Maga',
    ataques: [
      { nome: 'Bola de Fogo', danoBase: 80, critico: false },
      { nome: 'Raio Congelante', danoBase: 20, critico: true },
    ],
  },
];


// Calcule o dano total de cada herói.
// Se o ataque for crítico, o dano conta em dobro.
const danoFinal = herois.map((players) => players.ataques.reduce((total, ataque) => {
    const dano = ataque.critico ? ataque.danoBase * 2 : ataque.danoBase
    return total += dano
}, 0))

// Crie um array com { nome, classe, danoTotal }.
const newArr = herois.map((player, i) => {
    return {
        nome: player.nome,
        classe: player.classe,
        danoTotal: danoFinal[i]
    }
})

// Ordene do maior para o menor danoTotal.
const ordenar = newArr.sort((a, b) => b.danoTotal - a.danoTotal)

// Filtre apenas quem causou mais de 150 de dano.
const filtrar = ordenar.filter((player) => player.danoTotal > 150)

console.log(filtrar)