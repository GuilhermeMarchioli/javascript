//Você tem uma lista de alunos da Academia de Aventureiros. Cada aluno tem:
//nome
//disciplina (espada, magia, furtividade...)
//provas: array com objetos { nota, dificuldade }
const alunos = [
  {
    nome: 'Alaric',
    disciplina: 'espada',
    provas: [
      { nota: 8, dificuldade: 'alta' },
      { nota: 6, dificuldade: 'média' },
      { nota: 7, dificuldade: 'baixa' },
    ],
  },
  {
    nome: 'Lyra',
    disciplina: 'magia',
    provas: [
      { nota: 9, dificuldade: 'alta' },
      { nota: 10, dificuldade: 'alta' },
      { nota: 8, dificuldade: 'média' },
    ],
  },
  {
    nome: 'Kael',
    disciplina: 'furtividade',
    provas: [
      { nota: 6, dificuldade: 'baixa' },
      { nota: 7, dificuldade: 'média' },
      { nota: 5, dificuldade: 'média' },
    ],
  },
];


//Calcule a média ponderada de cada aluno.

//A nota final deve ser a média das notas, considerando o peso:

//dificuldade alta = peso 3

//dificuldade média = peso 2

//dificuldade baixa = peso 1

//Crie um novo array com objetos: { nome, disciplina, notaFinal }

//Filtre apenas alunos com notaFinal acima de 7.5

//Ordene do melhor para o pior