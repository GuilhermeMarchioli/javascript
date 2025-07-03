// DESAFIO 2 – ORDEM DOS HERÓIS (DC)

const herois = [
  { nome: 'Wally West', classe: 'velocista', missoes: 30, derrotas: 1 },
  { nome: 'Superman', classe: 'kryptoniano', missoes: 50, derrotas: 5 },
  { nome: 'Capuz Vermelho', classe: 'estrategista', missoes: 25, derrotas: 3 },
  { nome: 'Zatanna', classe: 'mago', missoes: 40, derrotas: 2 },
];

// Objetivos:
// Calcular a taxa de sucesso de cada herói ((missoes - derrotas) / missoes).
const taxaDeSucesso = herois.map((heroi) => (heroi.missoes - heroi.derrotas) / heroi.missoes)

// Criar um array com { nome, classe, taxaSucesso }.
const newArr = herois.map((heroi, i) => {
    return {
        nome: heroi.nome,
        classe: heroi.classe,
        taxaSucesso: taxaDeSucesso[i]
    }
})

// Filtrar os heróis com taxa acima de 50%.
const filtrar = newArr.filter((heroi) => heroi.taxaSucesso > 0.50)

// Ordenar do mais eficiente para o menos.
const ordenar = filtrar.sort ((a, b) => b.taxaSucesso - a.taxaSucesso)

console.log(ordenar)