//Você tem um array de jogadores:
//nome, pontos, partidas, ativo (boolean)
const jogadores = [
  { nome: 'Kira', pontos: 1200, partidas: 10, ativo: true },
  { nome: 'Ronan', pontos: 500, partidas: 4, ativo: true },
  { nome: 'Selene', pontos: 980, partidas: 8, ativo: false },
  { nome: 'Darius', pontos: 300, partidas: 6, ativo: true },
];


//Calcule a média de pontos por partida de cada jogador.
const mediaJogadores = jogadores.map((players) => players.pontos / players.partidas)

//Crie um array com { nome, media, ativo }
const newArr = jogadores.map((players, i) => {
    return{
        nome: players.nome,
        media: mediaJogadores[i],
        partidas: players.partidas,
        ativo: players.ativo
    }
})

//Filtre apenas jogadores ativos com média acima de 100.
const filtro = newArr.filter((player) => player.ativo == true && player.media > 100)

//Verifique se todos os jogadores filtrados têm pelo menos 5 partidas.
const every = filtro.every((player) => player.partidas > 5)

console.log(every)