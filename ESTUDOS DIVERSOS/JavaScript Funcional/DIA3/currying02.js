function aplicarDesconto(desconto) {
    return function(preco) {
        return preco * (1- desconto);
    }
}

const desconto5 = aplicarDesconto(0.05)
const desconto10 = aplicarDesconto(0.10)
const desconto20 = aplicarDesconto(0.20)

console.log(desconto5(100))
console.log(desconto10(100))
console.log(desconto20(100))