let inventario = ['Poção de Vida', 'Espada de Ferro', 'Escudo de Madeira'];

//Adicione o item "Elixir de Mana" ao final do inventário.
inventario.push('Elixir de Mana')

//Remova o item "Escudo de Madeira" do inventário.
inventario.splice(2, 1)

//Modifique o item "Espada de Ferro" para "Espada Flamejante".
const alterar = inventario.map((heroi) => heroi === 'Espada de Ferro' ? 'Espada Flamejante' : heroi);

//Mostre o inventário final no console.

console.log(alterar)