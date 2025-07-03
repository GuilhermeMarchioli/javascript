// Você tem uma lista de Pokémon da elite com:
const pokemons = [
  { nome: 'Lucario', tipo: 'lutador', nivel: 60, ataques: [{ nome: 'Aura Sphere', dano: 90 }, { nome: 'Close Combat', dano: 120 }] },
  { nome: 'Gengar', tipo: 'fantasma', nivel: 58, ataques: [{ nome: 'Shadow Ball', dano: 80 }, { nome: 'Dark Pulse', dano: 85 }] },
  { nome: 'Blaziken', tipo: 'fogo', nivel: 62, ataques: [{ nome: 'Blaze Kick', dano: 85 }, { nome: 'Flare Blitz', dano: 120 }] },
  { nome: 'Machamp', tipo: 'lutador', nivel: 55, ataques: [{ nome: 'Dynamic Punch', dano: 100 }, { nome: 'Karate Chop', dano: 50 }] },
];

//Objetivos:
// Filtrar apenas os Pokémon do tipo "lutador".
const filtrar = pokemons.filter((poke) => poke.tipo === 'lutador')

// Calcular o total de dano dos ataques de cada Pokémon.
const calcularDano = pokemons.map((list) => list.ataques.reduce((total, poke) => total.dano += poke.dano, 0))

// Criar um novo array com { nome, nivel, totalDano }.
const newArr = filtrar.map((poke, i) => {
    return {
        nome: poke.nome,
        nivel: poke.nivel,
        totalDano: calcularDano[i]
    }
})

// Ordenar do mais forte para o mais fraco (com base no dano total).
const ordenar = newArr.sort((a, b) => b.totalDano - a.totalDano)

// (Opcional) Mostrar apenas os que têm ao menos um ataque com dano maior que 100.
const Opcional = filtrar.filter((item) => item.ataques.some((atq) => atq.dano > 100))

console.log(Opcional)