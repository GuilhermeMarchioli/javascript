// Dado um array de Pokémons com nome e XP, dobre apenas o XP e crie um novo array com os dados atualizados.

const pokemons = [
  { nome: 'Pikachu', xp: 120 },
  { nome: 'Charmander', xp: 200 },
  { nome: 'Bulbasaur', xp: 150 },
];

const dobraXP = pokemons.map((poke) => {
    return {
       nome: poke.nome,
       xp: poke.xp * 2
    }
})

console.log(dobraXP)