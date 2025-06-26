// Você tem uma lista de produtos na loja:
// nome, tipo, raridade, preco, quantidadeVendida
const loja = [
  { nome: 'Espada Flamejante', tipo: 'arma', raridade: 'épico', preco: 100, quantidadeVendida: 5 },
  { nome: 'Poção de Cura', tipo: 'consumível', raridade: 'comum', preco: 10, quantidadeVendida: 50 },
  { nome: 'Armadura Sombria', tipo: 'armadura', raridade: 'épico', preco: 200, quantidadeVendida: 2 },
  { nome: 'Anel do Vento', tipo: 'acessório', raridade: 'raro', preco: 80, quantidadeVendida: 4 },
];

// Calcule quanto cada item rendeu (preço × quantidadeVendida).
const renda = loja.map((item) => item.quantidadeVendida * item.preco)

// Crie um array com { nome, tipo, raridade, totalVendido }.
const newArr = loja.map((item, i) => {
    return {
        nome: item.nome,
        tipo: item.tipo,
        raridade: item.raridade,
        RendaTotal: renda[i]
    }
})

// Filtre apenas itens de raridade "épico" e que venderam mais de 200 moedas.
const filtro = newArr.filter((item) => item.raridade === 'épico' && item.RendaTotal > 200)

// Ordene os resultados do que mais vendeu pro que menos vendeu.
const ordenar = filtro.sort((a, b) => b.RendaTotal - a.RendaTotal)


console.log(ordenar)