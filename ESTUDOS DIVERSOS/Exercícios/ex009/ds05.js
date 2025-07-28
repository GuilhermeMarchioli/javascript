//Filtre apenas os vilões reformados (reformado: true).
//Ordene esses vilões do mais fraco para o mais forte, cm base no poder.
//Crie uma nova array só com os nomes desses vilões, mas em caixa alta.
//Exiba no console o resultado final.

let vilões = [
  { nome: "Coringa", reformado: false, poder: 88 },
  { nome: "Arlequina", reformado: true, poder: 67 },
  { nome: "Pinguim", reformado: false, poder: 45 },
  { nome: "Mulher-Gato", reformado: true, poder: 59 },
  { nome: "Exterminador", reformado: true, poder: 92 }
];

let filtro = vilões.filter((vilao) => vilao.reformado == true)
let maisBuxaproMenosBuxa = filtro.sort((a, b) => a.poder - b.poder)

let naogrita = maisBuxaproMenosBuxa.map((vilao) => vilao.nome.toLocaleUpperCase())

console.log(naogrita)

