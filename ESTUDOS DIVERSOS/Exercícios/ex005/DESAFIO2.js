// Você tem uma lista de jogadores com pontuação e status ativo.
// Filtre só os jogadores ativos
// Calcule a média das pontuações dos ativos
// Retorne os nomes dos jogadores com pontuação acima da média
// Verifique se todos os ativos têm pontuação maior que 1000

const jogadores = [
  { nome: 'Ash', pontos: 1340, ativo: true },
  { nome: 'Misty', pontos: 800, ativo: false },
  { nome: 'Brock', pontos: 1560, ativo: true },
  { nome: 'Gary', pontos: 920, ativo: true },
  { nome: 'Tracey', pontos: 1100, ativo: false },
];

const ativos = jogadores.filter((user) => user.ativo == true)
const pontosTotais = ativos.reduce((total, user) => total += user.pontos, 0)
const media = pontosTotais / ativos.length

const acimaDaMedia = ativos.filter((user) => user.pontos > media)
const verificaPontos = acimaDaMedia.every((user) => user.pontos > 1000)

console.log(acimaDaMedia)
console.log(` passam de 1000 pontos? ${verificaPontos}`)

