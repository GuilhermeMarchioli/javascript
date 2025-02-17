function saudacao(...nomes) {
    return function() {
        nomes.forEach(item => console.log(`Olá, ${item}`))
    }
}


const cumprimentar = saudacao("Guilherme", "Matheus", 'roberto');
cumprimentar();