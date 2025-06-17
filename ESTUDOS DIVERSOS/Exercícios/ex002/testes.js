const data = [
  { nome: 'Matheus', idade: 31, salario: 2000, cargo: 'Marketing', ferias: false, },
  { nome: 'Ana', idade: 25, salario: 3000, cargo: 'Designer', ferias: false, },
  { nome: 'Carlos', idade: 40, salario: 5000, cargo: 'Contaveis', ferias: true, },
  { nome: 'Felipe', idade: 23, salario: 1700, cargo: 'Secretario', ferias: false, },
  { nome: 'Jessica', idade: 19, salario: 1600, cargo: 'Estagiário', ferias: true,},
  { nome: 'Tobias', idade: 26, salario: 7000, cargo: 'Dev', ferias: false, },
];

let someAlguemComAlgo = data.every((user) => user.nome)

console.log(someAlguemComAlgo)