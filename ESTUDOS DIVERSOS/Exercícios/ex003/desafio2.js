// Dada uma lista de jogadores com pontuação, filtre só os que têm pontuação acima de 1000 e retorne apenas os nomes deles em um novo array.

const jogadores = [
  { nome: 'Lucas', pontos: 950 },
  { nome: 'Bianca', pontos: 1230 },
  { nome: 'Marcos', pontos: 700 },
  { nome: 'Fernanda', pontos: 1420 },
];

const filtrar = jogadores.filter((user) => user.pontos > 1000)
const map = filtrar.map((user) => user.nome)


console.log(map)