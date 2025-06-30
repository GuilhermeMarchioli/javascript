//Você tem um array com heróis e vilões monitorados pela Liga da Justiça. Cada personagem tem:
//nome
// afiliação: 'herói' ou 'vilão'
// nivelDeAmeaça: de 1 a 10
// batalhas: array de objetos { adversario, resultado, danoCausado }

const personagens = [
  {
    nome: 'Wally West',
    afiliação: 'herói',
    nivelDeAmeaça: 4,
    batalhas: [
      { adversario: 'Gorila Grodd', resultado: 'vitória', danoCausado: 100 },
      { adversario: 'Capitão Frio', resultado: 'vitória', danoCausado: 120 },
    ],
  },
  {
    nome: 'Capuz Vermelho',
    afiliação: 'herói',
    nivelDeAmeaça: 6,
    batalhas: [
      { adversario: 'Máscara Negra', resultado: 'vitória', danoCausado: 130 },
      { adversario: 'Coringa', resultado: 'derrota', danoCausado: 80 },
    ],
  },
  {
    nome: 'Exterminador',
    afiliação: 'vilão',
    nivelDeAmeaça: 8,
    batalhas: [
      { adversario: 'Asa Noturna', resultado: 'vitória', danoCausado: 150 },
      { adversario: 'Arqueiro Verde', resultado: 'empate', danoCausado: 100 },
    ],
  },
  {
    nome: 'Coringa',
    afiliação: 'vilão',
    nivelDeAmeaça: 9,
    batalhas: [
      { adversario: 'Batman', resultado: 'derrota', danoCausado: 60 },
      { adversario: 'Capuz Vermelho', resultado: 'vitória', danoCausado: 90 },
    ],
  },
];

//Filtre apenas os vilões com nível de ameaça acima de 6 (ameaças sérias!)
const filtrarViloes = personagens.filter((vilao) => vilao.afiliação === "vilão" && vilao.nivelDeAmeaça > 6  ) 

//Calcule o total de dano causado por cada personagem (usando reduce nos objetos de batalha)
const danoTotal = filtrarViloes.map((lista) => lista.batalhas.reduce((total, vilao) => total += vilao.danoCausado, 0))

//Crie um novo array com { nome, afiliação, nivelDeAmeaça, totalDano }
const newArr = filtrarViloes.map((vilao, i) => {
  return {
    nome: vilao.nome,
    afiliação: vilao.afiliação,
    nivelDeAmeaça: vilao.nivelDeAmeaça,
    totalDano: danoTotal[i]
  }
})

//Ordene esse novo array do que mais causou dano para o que menos causou
const ordenar = newArr.sort((a, b) => b.totalDano - a.totalDano)

console.log(ordenar)