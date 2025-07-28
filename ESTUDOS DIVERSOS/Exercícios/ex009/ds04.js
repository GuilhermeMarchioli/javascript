// Crie uma lista de pokémons com tipos misturados
// Use filter para criar uma nova lista só com os do tipo "Lutador"

let pokemons = [
  { nome: "Riolu", tipo: "Lutador" },
  { nome: "Pikachu", tipo: "Elétrico" },
  { nome: "Gallade", tipo: "Psíquico/Lutador" },
  { nome: "Charmander", tipo: "Fogo" }
];

const somenteOsBrabo = pokemons.filter((poke) => poke.tipo === 'Lutador' || poke.tipo === "Psíquico/Lutador")

// seu código aqui

console.log("Pokémons Lutadores:", somenteOsBrabo);