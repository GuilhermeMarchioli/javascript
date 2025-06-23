// Você tem um array de distâncias percorridas em km por dia.
// Use some para checar se algum dia teve percurso ≥ 20 km.
// Use every para checar se todos os dias tiveram percurso ≥ 5 km.
// Use findIndex para achar o primeiro dia que teve menos de 5 km.

const distancias = [8, 12, 4, 15, 22, 5];

const some = distancias.some((km) => km >= 20)
const every = distancias.every((km) => km >= 5)
const findIndex = distancias.findIndex((km) => km < 5)

console.log(`Percurso >= 20? ${some}; Todos são >= 5? ${every}; Dia < 5? ${findIndex}`)