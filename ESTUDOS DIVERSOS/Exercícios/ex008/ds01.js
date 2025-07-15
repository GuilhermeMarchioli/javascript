const grupos = [
  {
    nome: 'Sentinelas de Ferro',
    região: 'Norte',
    missoes: [
      { nome: 'Defender a Fortaleza', sucesso: true, xp: 300, danoSofrido: 50 },
      { nome: 'Resgatar Prisioneiros', sucesso: true, xp: 200, danoSofrido: 30 },
    ],
  },
  {
    nome: 'Sombras da Neve',
    região: 'Sul',
    missoes: [
      { nome: 'Sabotar o Castelo', sucesso: false, xp: 100, danoSofrido: 80 },
      { nome: 'Espionar Tropas', sucesso: true, xp: 150, danoSofrido: 20 },
    ],
  },
  {
    nome: 'Alvorada Dourada',
    região: 'Leste',
    missoes: [
      { nome: 'Proteger a Caravana', sucesso: true, xp: 250, danoSofrido: 40 },
      { nome: 'Explorar Ruínas', sucesso: true, xp: 300, danoSofrido: 60 },
    ],
  },
];

//Calcular o xp total de cada grupo
const xp = grupos.map((guilda) => guilda.missoes.reduce((total, missao) => total += missao.xp))

const dano = grupos.m((guilda) => guilda.danoSofrido.reduce((total, danos) => total += danos.danoSofrido))

//Criar um array com { nome, xpTotal, mediaDano }
const newArr = grupos.map((grupo, i) => {
    return {
        nome: grupo.nome,
        xpTotal: xp[i],
        mediaDano: dano[i]
    }
})

//Filtrar apenas grupos com xpTotal acima de 400


//Ordenar do mais eficiente para o menos, baseado em média de dano (quanto menos, melhor)


//(Opcional) Mostrar apenas os grupos que concluíram todas as missões com sucesso


console.log(newArr)