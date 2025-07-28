// Crie um array com 4 armas mágicas
// Use splice para remover a segunda arma e adicionar outra no lugar
// Depois, use map para adicionar "💥" no nome de cada arma

let armas = ["Espada Flamejante", "Arco Elétrico", "Machado Congelante", "Cajado Sombrio"];

// seu código aqui
armas.splice(1, 1)
armas.splice(1, 0, 'Tridente Reluzente')

efeitosEspeciaisKABOOM = armas.map((item) => item += '💥')

console.log(efeitosEspeciaisKABOOM);