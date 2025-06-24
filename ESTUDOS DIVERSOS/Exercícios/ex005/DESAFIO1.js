// Você tem um array de objetos que representam itens no inventário, cada um com nome, quantidade e preço unitário.

// Remova duplicatas de itens com o mesmo nome (fique com o primeiro)
// Filtre só os itens que têm quantidade maior que 3
// Crie um array só com strings do formato "nome - total: valorTotal", onde valorTotal = quantidade * preço unitário
// Ordene esse array pelo valorTotal do maior para o menor

const inventario = [
  { nome: 'Poção', quantidade: 5, preco: 10 },
  { nome: 'Poké Bola', quantidade: 2, preco: 15 },
  { nome: 'Revive', quantidade: 4, preco: 25 },
  { nome: 'Poção', quantidade: 1, preco: 10 },
  { nome: 'Antídoto', quantidade: 6, preco: 5 },
];

const duplicatas = inventario.filter((item, index) => index === inventario.findIndex((obj) => obj.nome == item.nome))
const filtrarQuantidade = duplicatas.filter((item) => item.quantidade > 3)

const totalPreco = filtrarQuantidade.map((item) => {
  const valorTotal = item.quantidade * item.preco;
  return `${item.nome} - total: R$${valorTotal}`;
});

const totalQuantidade = filtrarQuantidade.reduce((total, item) => total += item.quantidade, 0)
 const totalValor = filtrarQuantidade.reduce((total, item) => total += item.preco, 0)

const novoArr = filtrarQuantidade.map((arr) => {
    return {
        nome: arr.nome,
        quantidade: arr.quantidade,
        valorTOTAL: totalPreco
    }
})

console.log(novoArr)

 