// Você tem um array com magos registrados pelo Conselho Arcano. Cada mago tem:
// nome
// escola: necromancia, evocação, transmutação, etc. nível: de 1 a 20
// feitiços: array com objetos { nome, tipo, poder } (tipo pode ser ataque, cura, suporte)
const magos = [
  {
    nome: 'Elandor',
    escola: 'evocação',
    nivel: 12,
    feitiços: [
      { nome: 'Bola de Fogo', tipo: 'ataque', poder: 90 },
      { nome: 'Mãos Flamejantes', tipo: 'ataque', poder: 40 },
    ],
  },
  {
    nome: 'Mirella',
    escola: 'transmutação',
    nivel: 8,
    feitiços: [
      { nome: 'Pele de Pedra', tipo: 'suporte', poder: 50 },
      { nome: 'Forma Gasosa', tipo: 'suporte', poder: 30 },
    ],
  },
  {
    nome: 'Thalon',
    escola: 'necromancia',
    nivel: 15,
    feitiços: [
      { nome: 'Toque Vampírico', tipo: 'ataque', poder: 60 },
      { nome: 'Renovação Sombria', tipo: 'cura', poder: 70 },
    ],
  },
];

//Filtrar os magos com nível acima de 10.
const filtrar = magos.filter((mago) => mago.nivel >= 10)

//Calcular o total de poder dos feitiços de cada mago.
const totalPoder = magos.map((list) => list.feitiços.reduce((total, feitiço) => total += feitiço.poder))

//Criar um novo array com { nome, escola, totalPoder }.
const newArr = filtrar.map((mago, i) => {
    return {
        nome: mago.nome,
        escola: mago.escola,
        Poder: totalPoder[i]
    }
})

//Ordenar do mago mais poderoso pro menos.
const ordenar = newArr.sort((a, b) => b.Poder - a.Poder)

//(Opcional) Mostrar só os que têm pelo menos um feitiço de tipo "cura".

console.log(ordenar)