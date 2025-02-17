function multiplicar(num, fator) {
    return function() {
        console.log(num * fator)
    }
}

const fatorar = multiplicar(5, 10);
fatorar();