const frutas = ['maçã', 'banana', 'uva'];

const gosto = (fruta) => {
    fruta.forEach(fruit => {
        console.log(`Eu gosto muito de ${fruit}`)
    });
}

gosto(frutas)
