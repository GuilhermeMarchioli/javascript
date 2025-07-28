// Crie uma array com 5 heróis da DC
// Depois, remova o último, adicione o "Wally West" no início
// E veja se "Batman" está na lista com includes()

let herois = ["Superman", "Batman", "Caçador de Marte", "Aquaman", "Cyborg"];

// seu código aqui

herois.pop()
herois.unshift('Wally West')

verificaMorcegao = herois.includes("Batman")

console.log(herois);
console.log(verificaMorcegao)