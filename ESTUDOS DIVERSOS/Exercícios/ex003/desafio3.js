//Dado um carrinho de compras com produtos, calcule o valor total da compra.

const carrinho = [
  { produto: 'Mouse', preco: 50 },
  { produto: 'Teclado', preco: 100 },
  { produto: 'Monitor', preco: 700 },
];

const soma = carrinho.reduce((valorToral, product) => valorToral += product.preco, 0)

console.log(soma)