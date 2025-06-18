//Uma lista de alunos e notas. Responda uno terminal com true e false:
// Todos passaram (nota >= 7)?
// Alguém ficou com nota 0?

const alunos = [
  { nome: 'Ana', nota: 9 },
  { nome: 'Pedro', nota: 7 },
  { nome: 'Lívia', nota: 4 },
  { nome: 'Carlos', nota: 0 },
];

const every = alunos.every((aluno) => aluno.nota >= 7)
const zero = alunos.some((aluno) => aluno.nota == 0)

console.log(every, zero)