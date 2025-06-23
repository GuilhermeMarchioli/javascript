// Você tem um array de objetos usuario com nome e ativo (booleano).
// Use filter para pegar só os usuários inativos (ativo === false).
// Com map, extraia apenas o nome.
// Com includes, verifique se um nome específico, por exemplo "Carlos", está entre eles.

const usuarios = [
  { nome: 'Ana', ativo: true },
  { nome: 'Carlos', ativo: false },
  { nome: 'Bianca', ativo: false },
  { nome: 'Pedro', ativo: true },
];

filter = usuarios.filter((user) => user.ativo == false)
map = filter.map((user) => user.nome)

includes = map.includes('Bianca')

console.log(`${map}, o usuário em includes é ${includes}`)
 
