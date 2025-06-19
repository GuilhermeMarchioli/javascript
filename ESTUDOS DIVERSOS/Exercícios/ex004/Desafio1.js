//Você tem um array de treinadores com nome e vitorias.
//Filtre só quem tem mais de 5 vitórias.
//Ordene (com sort) do maior para o menor número de vitórias.
//Retorne só os nomes dos top 3.

const treinadores = [
  { nome: 'Ash', vitorias: 10 },
  { nome: 'Misty', vitorias: 4 },
  { nome: 'Brock', vitorias: 7 },
  { nome: 'Gary', vitorias: 12 },
  { nome: 'Trace', vitorias: 6 },
];

const filtrar = treinadores.filter((user) => user.vitorias > 5)

filtrar.sort((a, b) => b.vitorias - a.vitorias);

const map = filtrar.map((user) => user.nome)

console.log(map)